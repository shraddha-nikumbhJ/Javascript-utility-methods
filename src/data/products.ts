const products = Array.from({ length: 500 }, (_, index) => ({
  id: index + 1,

  title: `Product ${index + 1}`,

  price: Math.floor(Math.random() * 50000),

  image: `https://picsum.photos/200/200?random=${index + 1}`
}));

export default products;
