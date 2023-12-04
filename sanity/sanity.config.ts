import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

interface Template {
  id: string
  title: string
  schemaType: string
  parameters: {name: string; title: string; type: string}[]
  value: (params: {parentId: string}) => any // Adjust the return type based on your actual use case
}

export default defineConfig({
  name: 'default',
  title: 'Barattini ecom  Project',

  projectId: '2vlpkqti',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  templates: (prev: Template[] = []) => {
    const categoryChild = {
      id: 'category-child',
      title: 'Category: Child',
      schemaType: 'category',
      parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
      // This value will be passed-in from desk structure
      value: ({parentId}: {parentId: string}) => ({
        parent: {_type: 'reference', _ref: parentId},
      }),
    }

    return [...prev, categoryChild]
  },
})
