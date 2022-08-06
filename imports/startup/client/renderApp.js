// React
import React, { Suspense } from 'react'

// GraphQL
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './graphQLClient'

// App
import { App } from '/imports/ui/containers/App'

export const renderApp = () => (
  <Suspense fallback={<div>Loading data</div>}>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </Suspense>
)
