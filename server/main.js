import { Meteor } from 'meteor/meteor'

import { startGraphQLServer } from '/imports/startup/server/graphql'

Meteor.startup(() => {
  console.log('before gralql')
  startGraphQLServer()
  console.log('✅ GraphQL server initialized')
})
