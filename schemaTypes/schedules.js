// /studio/schemaTypes/landing.js

export default {
  name: 'schedules',
  title: 'Horarios',
  type: 'document',
    preview: {
    select: {
      horarios: 'horarios',
    },
    prepare(selection) {
      return {
        title: 'Horarios de reuniones',
        subtitle: `Total de horarios: ${selection.horarios ? selection.horarios.length : 0}`,
      };
    },
  },
  fields: [
    {
      name: 'horarios',
      title: 'Lista de Horarios',
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
                list: [
                  { title: 'Lunes', value: 'lunes' },
                  { title: 'Martes', value: 'martes' },
                  { title: 'Miércoles', value: 'miercoles' },
                  { title: 'Jueves', value: 'jueves' },
                  { title: 'Viernes', value: 'viernes' },
                  { title: 'Sábado', value: 'sabado' },
                  { title: 'Domingo', value: 'domingo' },
                ],
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'hora',
              title: 'Hora',
              type: 'string',
              description: 'Formato: HH:MM',
              validation: Rule => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
                name: 'formato de hora',
                invert: false,
              }).error('Por favor, usa el formato HH:MM'),
            },
            {
              name: 'descripcion',
              title: 'Descripción',
              type: 'string',
            },
          ],
        },
      ],
      validation: Rule => Rule.required().min(1).error('Debe haber al menos un horario'),
    },
  ],
};