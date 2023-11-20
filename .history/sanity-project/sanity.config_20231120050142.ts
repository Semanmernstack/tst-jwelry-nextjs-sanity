import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'e5jx9yda',
  dataset: 'production',
  useCdn: true,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
