// /schemas/informacionDeContacto.js
export default {
  name: "contact",
  title: "Información de Contacto",
  type: "document",
  fields: [
    {
      name: "numero",
      title: "Número",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "calle",
      title: "Calle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "localidad",
      title: "Localidad",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "provincia",
      title: "Provincia",
      type: "string",
      options: {
        list: [
          { title: "Buenos Aires", value: "Buenos Aires" },
          { title: "Ciudad Autónoma de Buenos Aires", value: "CABA" },
          { title: "Catamarca", value: "Catamarca" },
          { title: "Chaco", value: "Chaco" },
          { title: "Chubut", value: "Chubut" },
          { title: "Córdoba", value: "Córdoba" },
          { title: "Corrientes", value: "Corrientes" },
          { title: "Entre Ríos", value: "Entre Ríos" },
          { title: "Formosa", value: "Formosa" },
          { title: "Jujuy", value: "Jujuy" },
          { title: "La Pampa", value: "La Pampa" },
          { title: "La Rioja", value: "La Rioja" },
          { title: "Mendoza", value: "Mendoza" },
          { title: "Misiones", value: "Misiones" },
          { title: "Neuquén", value: "Neuquén" },
          { title: "Río Negro", value: "Río Negro" },
          { title: "Salta", value: "Salta" },
          { title: "San Juan", value: "San Juan" },
          { title: "San Luis", value: "San Luis" },
          { title: "Santa Cruz", value: "Santa Cruz" },
          { title: "Santa Fe", value: "Santa Fe" },
          { title: "Santiago del Estero", value: "Santiago del Estero" },
          {
            title: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
            value: "Tierra del Fuego",
          },
          { title: "Tucumán", value: "Tucumán" },
        ],
      },
    },
    {
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Correo Electrónico",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
     {
      name: "redes",
      title: "Redes Sociales",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "nombre",
              title: "Nombre de la Red Social",
              type: "string",
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'Snapchat', value: 'snapchat' },
                  { title: 'X', value: 'x' },
                  { title: 'Pinterest', value: 'pinterest' },
                  { title: 'Linkedin', value: 'linkedin' },
                  { title: 'Spotify', value: 'spotify' },
                ],
              },
            },
            { name: "url", title: "URL", type: "url" },
          ],
          // Vista previa para cada objeto dentro del array
          preview: {
            select: {
              title: 'nombre',
              subtitle: 'url',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      calle: 'calle',
      numero: 'numero',
      localidad: 'localidad',
      provincia: 'provincia',
    },
    prepare(selection) {
      const { calle, numero, localidad, provincia } = selection;
      return {
        title: `${calle} ${numero}, ${localidad}`,
        subtitle: provincia,
      };
    },
  },
};