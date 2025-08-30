import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "carousel",
  title: "Carrosel",
  type: "document",

  preview: {
    select: {
      image: "image",
      order: "orderRank",
    },
    prepare(selection) {
      const { image, order } = selection;
      const title = `Imagen N° ${order}`;

      return {
        title: title,
        subtitle: "Haz clic para editar",
        media: image,
      };
    },
  },

  fields: [
    orderRankField({ type: "carousel" }),
    {
      name: "image",
      title: "Imagen del Carrusel",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};