const primaryState = {
  products: [
    { id: 1, name: 'Jeans', price: 50.01, quantity: 8 },
    { id: 2, name: 'T- shirt', price: 10.99, quantity: 10 },
    { id: 3, name: 'Coat', price: 80.99, quantity: 5 },
    { id: 4, name: 'Shoes', price: 100.99, quantity: 5 },
  ],
  totalPrice: 0,
  shoppingCart: [],
};

const mainReducer = (state = primaryState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state; // Add code -> item click
    case 'BUY':
      return { ...state, totalPrice: 0, shoppingCart: [] };
    default:
      return state;
  }
};

export default mainReducer;
