export default {
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título del evento",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Fecha",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
        calendarTodayLabel: "Hoy",
      },
    },
    {
      name: "time",
      title: "Horario",
      type: "string",
      // Validación para formato HH:MM
      validation: (Rule) =>
        Rule.required()
          .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
            name: "formato de hora (HH:MM)", // Nombre amigable para el error
            invert: false, // La regex debe coincidir
          })
          .error("El horario debe tener el formato HH:MM (ej. 14:30)"),
    },
    {
      name: "location",
      title: "Ubicación",
      type: "string",
    },
    {
      name: "attendees",
      title: "Destinado a",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
    },
    {
      name: "featured",
      title: "¿Es destacado?",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "featured",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media: media ? "🌟 Destacado" : "🗓️ Evento", // Sugerencia para mejor visualización
      };
    },
  },
};
