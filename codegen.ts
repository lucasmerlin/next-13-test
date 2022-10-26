import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://hellopaint.io/api/gateway/graphql',
  documents: ['app/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './lib/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config