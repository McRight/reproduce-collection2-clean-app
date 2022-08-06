import { makeExecutableSchema } from '@graphql-tools/schema'
// import { setup } from 'meteor/swydo:ddp-apollo'

// import { makeExecutableSchema } from 'graphql-tools'
import { getSchema } from 'graphql-load'

import '/imports/api/resolvers'

/*
 * Context
 */

const schema = makeExecutableSchema(getSchema())

/*
 * Apollo GraphQL Server
 */

export const startGraphQLServer = () => {
  console.log('setup call')
  // setup({
  //   schema,
  // })
}
