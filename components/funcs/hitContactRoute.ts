import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'
import createOrUpdateLead from './createOtUpdateLead'
import { gql, useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import moment from 'moment'

const CHECK_TOKENS = gql`
  query amoTokens($title: String!) {
    amos(where: { title: $title }) {
      id
      title
      refresh
      access
      expired_in
    }
  }
`

const UPDATE_TOKEN = gql`
  mutation UpdateTokens($input: updateAmoInput!) {
    updateAmo(input: $input) {
      amo {
        id
        access
        refresh
        expired_in
      }
    }
  }
`

const hitContactRoute = async values => {
  try {
    values.id = uuidv4()
    await axios.post(`${routes.front.root}/api/genezis`, values)
    const { data: checkTokenData } = await client.query({
      query: CHECK_TOKENS,
      variables: { title: 'amo' },
      fetchPolicy: 'network-only'
    });

    // console.log('values', values)

    if(values?.utm?.utm_source
      === 'edpartners'){
    const edPartners = await axios.post(`${routes.front.root}/api/edPartners`, values)
    
    values.edPartners = edPartners.data.success
    }
    
    const tokenId = checkTokenData?.amos[0]?.id
    const expireTime = checkTokenData?.amos[0]?.expired_in
    const oldAccess_token = checkTokenData?.amos[0]?.access
    const oldRefresh_token = checkTokenData?.amos[0]?.refresh
    const nowUNIXtime = moment().unix()
    const differenceInTime = expireTime - nowUNIXtime
    
    if(differenceInTime < 1800) {
      console.log('Time to upd token')
      const exchangeTokensResponse = await axios.post(
        `${routes.front.root}/api/amoCRMexchangeToken`,
        checkTokenData?.amos[0]
      )
      console.log(exchangeTokensResponse.data.access_token, tokenId, nowUNIXtime)
      const { data } = await client.mutate({
        mutation: UPDATE_TOKEN,
        variables: {
          input: {
            where: { id: tokenId },
            data: {
              access: exchangeTokensResponse.data.access_token,
              refresh: exchangeTokensResponse.data.refresh_token,
              expired_in: nowUNIXtime + 84400
            }
          }
        },
      })
      
      values.access = data.updateAmo.amo.access

      console.log(values)
      const newLead =  await createOrUpdateLead(values)
      console.log(newLead)
      return newLead.data.status

    } else {
      console.log('token life time is suffficient')
      values.access = oldAccess_token
      const newLead =  await createOrUpdateLead(values)
      console.log('newLead', newLead)
      console.log('newlead success')
      return newLead.data.status
    }

    // 
    // const res = await axios.post(`${routes.front.root}/api/contact`, values)
    // if(values.utm.utm_source
    //   === 'edpartners'){
    //   const edPartnersRes = await axios.post(`${routes.front.root}/api/edPartners`, values)
    // }
    // let output
    // res.status === 200 && (output = 200)
    // res.status === 500 && (output = 500)
    // return output
    // return { res, edPartnersRes };
  } catch (err) {
    // console.log(err)
    try {
      const res = await axios.post(`${routes.front.root}/api/contact`, values)
    console.log('asdasfasdf', res)
    return res.status
    } catch (error) {
      console.log(error)
      return error
    }
  }
}


export default hitContactRoute
