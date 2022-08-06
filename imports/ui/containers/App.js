/* eslint-disable react/prop-types */
/* global Account */

// React
import React, { useEffect } from 'react'
import { TEST_MUTATION } from '../graphql/mutations'
import { withMutation } from '../mixins/withMutation'
/*
 * App
 */

export const App = withMutation(TEST_MUTATION)(({ mutate }) => {
  useEffect(() => {
    mutate()
  }, [])

  return <div>Helo</div>
})
