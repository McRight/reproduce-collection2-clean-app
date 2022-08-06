import { load } from 'graphql-load'

import typeDefs from '../schema/index.graphql'

import { Mutation, queries } from './mutations'

/*
 * Query
 */

const Query = {
  version: (root, args, context) => context.version,
  ...queries,
}

/*
 * Resolvers
 */

const resolvers = {
  Query,
  Mutation,
}

load({
  typeDefs,
  resolvers,
})
