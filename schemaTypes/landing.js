// /studio/schemaTypes/landing.js

export default {
  name: 'landing',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título principal',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
    },
  ],
}
