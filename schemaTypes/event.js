import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "event",
  title: "Eventos",
  type: "document",
  fields: [
    orderRankField({ type: "event" }),
    {
      name: "title",
      title: "Título del evento",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // a. Modificación de los campos de fecha
    {
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
        calendarTodayLabel: "Hoy",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDate",
      title: "Fecha de finalización",
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
            name: "formato de hora (HH:MM)",
            invert: false,
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
    // b. Modificación de los campos de costo
    {
      name: "cost",
      title: "Costo",
      type: "string",
      options: {
        list: [
          { title: "Entrada libre", value: "Entrada libre" },
          { title: "Establecer costo", value: "custom" },
        ],
      },
      initialValue: "Entrada libre",
    },
    {
      name: "costValue",
      title: "Valor del costo",
      type: "number",
      hidden: ({ parent }) => parent.cost !== "custom",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent.cost === "custom" && !value) {
            return "El costo es obligatorio cuando se establece un valor personalizado.";
          }
          if (value < 0) {
            return "El costo debe ser un número positivo.";
          }
          return true;
        }),
    },
    {
      name: "contactPhone",
      title: "Teléfono de contacto",
      type: "string",
    },
    {
      name: "featured",
      title: "¿Es destacado?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "specialGuest",
      title: "Invitado especial",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "guestName",
      title: "Nombre del invitado",
      type: "string",
      hidden: ({ parent }) => !parent.specialGuest,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent.specialGuest && !value) {
            return "El nombre del invitado es obligatorio.";
          }
          return true;
        }),
    },
    // c. Nuevo campo para la invitación
    {
      name: "invitationText",
      title: "Texto de invitación",
      type: "text",
    },
    // d. Nuevo campo para el link de inscripción
    {
      name: "registrationLink",
      title: "Link de inscripción",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      featured: "featured",
      specialGuest: "specialGuest",
    },
    prepare(selection) {
      const { title, subtitle, featured, specialGuest } = selection;
      let displayTitle = title;
      let displaySubtitle = subtitle;
      let media = "Evento";

      if (featured) {
        media = "Destacado";
      }

      if (specialGuest) {
        displayTitle = `(Invitado) ${title}`;
      }

      return {
        title: displayTitle,
        subtitle: displaySubtitle,
        media,
      };
    },
  },
};