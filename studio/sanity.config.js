import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes/index.js'

export default defineConfig({
  name: 'overreaction-university',
  title: 'Overreaction University',
  projectId: 'rs5bgdcl',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
