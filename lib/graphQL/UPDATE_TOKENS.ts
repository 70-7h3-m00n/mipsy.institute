import { gql } from "@apollo/client";

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

export default UPDATE_TOKEN