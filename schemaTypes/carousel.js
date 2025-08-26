export default {
  name: "carousel",
  title: "Carrosel",
  type: "document",

  preview: {
    select: {
      carrusel: 'carrusel',
    },
    prepare(selection) {
      const totalImages = selection.carrusel ? selection.carrusel.length : 0;
      return {
        title: 'Imágenes',
        subtitle: `Total de imágenes: ${totalImages}`,
      };
    },
  },

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