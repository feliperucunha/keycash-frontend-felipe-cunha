const currencyFormat = (value) =>
  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);


export default currencyFormat;