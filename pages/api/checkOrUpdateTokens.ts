import CHECK_TOKENS from "@/lib/graphQL/CHECK_TOKENS";
import routes from "@/config/routes";
import client from "@/lib/apolloClient";
import axios from "axios";
import moment from "moment";
import { UPDATE_TOKEN } from "@/lib/index";

const checkOrUpdateTokens = async () => {
  
  try {
    const { data: checkTokenData } = await client.query({
      query: CHECK_TOKENS,
      variables: { title: 'amo' },
      fetchPolicy: 'network-only'
    });

    const tokenId = checkTokenData?.amos[0]?.id
    const expireTime = checkTokenData?.amos[0]?.expired_in;
    const oldAccess_token = checkTokenData?.amos[0]?.access
    const oldRefresh_token = checkTokenData?.amos[0]?.refresh
    const nowUNIXtime = moment().unix()
    const differenceInTime = expireTime - nowUNIXtime
    if (differenceInTime < 1800) {

      const exchangeTokensResponse = await axios.post(
        `${routes.front.root}/api/amoCRMexchangeToken`,
        checkTokenData?.amos[0]
      )

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

      return data.updateAmo.amo.access
      // return {access_token: 'data.updateAmo.amo.access'}
    } else {
      // return oldAccess_token
      return {access_token: oldAccess_token}
    }
  } catch (error) {
    console.error('tokenss=======>',error)
    return 
  }
}

export default checkOrUpdateTokens