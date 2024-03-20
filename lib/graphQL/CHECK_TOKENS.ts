import { gql } from "@apollo/client"

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

export default CHECK_TOKENS