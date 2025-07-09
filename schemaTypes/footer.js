export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'telefono',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'calle',
      title: 'Calle',
      type: 'string',
    },
    {
      name: 'numero',
      title: 'Número',
      type: 'number',
    },
    {
      name: 'localidad',
      title: 'Localidad',
      type: 'string',
    },
    {
      name: 'provincia',
      title: 'Provincia',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'horarios',
      title: 'Horarios de reuniones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dia',
              title: 'Día',
              type: 'string',
              options: {
                list: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
              },
            },
            {
              name: 'hora',
              title: 'Hora',
              type: 'string',
              description: 'Ej: 19:30',
            },
            {
              name: 'descripcion',
              title: 'Descripción',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'redes',
      title: 'Redes sociales',
      type: 'object',
      fields: [
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'tiktok', title: 'TikTok', type: 'url'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ],
    },
  ],
}
