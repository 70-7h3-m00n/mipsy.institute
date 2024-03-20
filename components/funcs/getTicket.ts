import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'
import { gql, useQuery } from '@apollo/client'
import checkOrUpdateTokens from 'pages/api/checkOrUpdateTokens'
import client from '@/lib/apolloClient'

const UPDATE_EVENT = gql`
  mutation UpdateEvent($input: updateEventInput!) {
    updateEvent(input: $input) {
      event {
        tickets_quantity
      }
    }
  }
`


const getTicket = async values => {
  try {
    values.id = uuidv4()
    const checkToken =  await checkOrUpdateTokens()
    console.log('NNNNNNEWWWW LEEEEAD', values)
    const access_token = checkToken.access_token
    values.access = access_token

    const { data } = await client.mutate({
      mutation: UPDATE_EVENT,
      variables: {
        input: {
          where: { id: values.seminar_id },
          data: {
            tickets_quantity: values.seminar_tickets_quantity - values.tickets
          }
        }
      },
    })

    console.log('GET_TICKETS', data.updateEvent.event.tickets_quantity)
    
    // const res = await axios.post(`${routes.front.root}/api/addSeminar`, values)
      return data.updateEvent.event.tickets_quantity
    
  } catch (err) {
    // console.log(err)
  }
}


export default getTicket