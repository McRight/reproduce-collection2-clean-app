import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { ApolloLink } from 'apollo-link'
import { DDPLink } from 'apollo-link-ddp'
// import { onError } from 'apollo-link-error'

// import { ApolloClient } from '@apollo/client'
// import { DDPLink } from '@swydo/apollo-link-ddp'

export const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
})
// const cache = new InMemoryCache({ addTypename: false })

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, location, path }) => {
//       const error = `[GraphQL error]: ${message} (Location: ${location}, Path: ${path})`
//       console.error(error)
//     })
//   }
//   if (networkError) {
//     const error = `[Network error]: ${networkError}`
//     console.error(error)
//   }
// })

// const meteorLink = new DDPLink()

// const client = new ApolloClient({
//   cache,
//   link: ApolloLink.from([errorLink, meteorLink]),
// })

// export { client }

// export const client = new ApolloClient({
//   link: new DDPLink(),
//   cache: new InMemoryCache(),
// })
