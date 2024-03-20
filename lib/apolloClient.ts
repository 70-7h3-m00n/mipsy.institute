import { ApolloClient, InMemoryCache } from '@apollo/client'
import { routes } from '@/config/index'
import { onError } from "@apollo/client/link/error";
import {  HttpLink, from } from "@apollo/client";

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// const httpLink = new HttpLink({ uri: `${routes.back.root}${routes.back.graphql}` })

const client = new ApolloClient({
  uri: `${routes.back.root}${routes.back.graphql}`,
  cache: new InMemoryCache(),
  // link: from([errorLink, httpLink]),
})

export default client
