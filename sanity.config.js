import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {esESLocale} from '@sanity/locale-es-es'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Puerta de paz',

  projectId: 'wmmpqkot',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Contenido')
          .items([
            orderableDocumentListDeskItem({
              type: 'schedules',
              title: 'Horarios',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'event',
              title: 'Eventos',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'bankDetail',
              title: 'Datos Bancarios',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'carousel',
              title: 'Imagenes',
              S,
              context,
            }),
            ...S.documentTypeListItems().filter(listItem => !['schedules', 'event', 'bankDetail', 'carousel'].includes(listItem.getId()))
          ])
      },
    }),
    visionTool(),
    esESLocale(),
  ],

  schema: {
    types: schemaTypes,
  },
})