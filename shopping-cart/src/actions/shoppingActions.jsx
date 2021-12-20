const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    id,
  };
};

const buy = () => {
  return {
    type: 'BUY',
  };
};

export { addToCart, buy };
