import { orderRankField } from '@sanity/orderable-document-list';

export default {
  name: 'schedules',
  title: 'Horarios',
  type: 'document',
  preview: {
    select: {
      dia: 'dia',
      hora: 'hora',
       descripcion: 'descripcion'
    },
    prepare(selection) {
      const { dia, hora, descripcion } = selection;
      return {
        title: `${descripcion}`,
        subtitle: `${dia} - ${hora}`,
      };
    },
  },
  fields: [
    orderRankField({ type: 'event' }),
    {
      name: 'dia',
      title: 'Día',
      type: 'string',
      options: {
        list: [
          {title: 'Lunes', value: 'Lunes'},
          {title: 'Martes', value: 'Martes'},
          {title: 'Miércoles', value: 'Miércoles'}, 
          {title: 'Jueves', value: 'Jueves'},
          {title: 'Viernes', value: 'Viernes'},
          {title: 'Sábado', value: 'Sábado'},
          {title: 'Domingo', value: 'Domingo'}, 
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hora',
      title: 'Hora',
      type: 'string',
      description: 'Formato: HH:MM',
      validation: (Rule) =>
        Rule.required()
          .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
            name: 'formato de hora',
            invert: false,
          })
          .error('Por favor, usa el formato HH:MM'),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'string',
    },
  ],
};