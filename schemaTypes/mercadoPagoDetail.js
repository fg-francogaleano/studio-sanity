// /schemas/donation.js
export default {
  name: "MercadoPago",
  title: "Mercado Pago",
  type: "document",
  fields: [
    {
      name: "qrImage",
      title: "Código QR (Mercado Pago)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "mpEmail",
      title: "Correo electrónico de Mercado Pago",
      type: "string",
    },
  ],
};
