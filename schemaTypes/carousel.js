export default {
  name: "carousel",
  title: "Carrosel",
  type: "document",
  fields: [
    {
      name: "carrusel",
      title: "Imágenes del Carrusel",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
};
