import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.ideasbox.fm',
  // schema: 'http://localhost:8080/graphql',
  // schema: 'https://ideasbox.almacenrivera.com/graphql',
  documents: 'src/render/**/*.graphql',
  generates: {
    'src/render/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    }
  }
}

export default config
