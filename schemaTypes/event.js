// /schemas/event.js
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
    dateFormat: "DD/MM/YYYY", // formato en que se muestra
    calendarTodayLabel: "Hoy" // etiqueta personalizada
  }, // si querés precisión de calendario usar "datetime"
    },
    {
      name: "time",
      title: "Horario",
      type: "string",
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
        media: media ? "hola" : "si",
      };
    },
  },
};
