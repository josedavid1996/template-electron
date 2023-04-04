import ENV from '@render/enviroment/index'
import { GraphQLClient } from 'graphql-request'

import { getSdk } from '@render/generated/graphql'

const client = new GraphQLClient(ENV.URL + '/graphql', {
  headers: () => {
    const token = localStorage.getItem('token') ?? null

    return {
      'apollo-require-preflight': 'true',
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const gqlFetch = getSdk(client)
