import { withClientState } from 'apollo-link-state'

export const stateLink = withClientState({
  defaults: {
    isConnected: true,
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } })
        return null
      },
    },
  },
})
