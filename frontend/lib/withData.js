import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { endpoint } from '../config'

// function createClient({ headers }) {
//   return new ApolloClient({
//     uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: "include"
//         },
//         headers
//       });
//     }
//   });
// }
const link = createHttpLink({ uri: 'http://localhost:4000' })
const cache = new InMemoryCache()

const client = () => {
  return new ApolloClient({
    link,
    cache,
  })
}

export default withApollo(client)
