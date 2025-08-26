// /schemas/donation.js
export default {
  name: "bankDetail",
  title: "Datos Bancarios",
  type: "document",
  fields: [
    {
      name: "bank",
      title: "Banco",
      type: "string",
    },
    {
      name: "accountNumber",
      title: "Número de Cuenta",
      type: "string",
    },
    {
      name: "cbu",
      title: "CBU",
      type: "string",
    },
    {
      name: "alias",
      title: "Alias",
      type: "string",
    },
    {
      name: "holder",
      title: "Titular",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: 'bank',
      subtitle: 'holder',
    },
  },
};