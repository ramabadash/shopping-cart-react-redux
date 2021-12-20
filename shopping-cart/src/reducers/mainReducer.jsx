export const primaryState = {
  products: [
    { id: 1, name: 'Jeans', price: 50.01, quantity: 8 },
    { id: 2, name: 'T- shirt', price: 10.99, quantity: 10 },
    { id: 3, name: 'Coat', price: 80.99, quantity: 5 },
    { id: 4, name: 'Shoes', price: 100.99, quantity: 5 },
  ],
  totalPrice: 0,
  shoppingCart: [],
};

const mainReducer = (state = primaryState, { type, id }) => {
  switch (type) {
    case 'ADD_TO_CART':
      const chosenProduct = state.products.find(product => product.id === id);
      if (chosenProduct && chosenProduct.quantity > 0) {
        const updatedPrice = state.totalPrice + chosenProduct.price; // Raising the total amount
        chosenProduct.quantity -= 1; // Reducing the quantity of the product
        // Add the product to the product cart
        const productOnCart = state.shoppingCart.find(
          product => product.id === id
        );
        if (productOnCart) {
          productOnCart.quantity += 1;
        } else {
          const { id, name } = chosenProduct;
          state.shoppingCart.push({ id, name, quantity: 1 });
        }
        return {
          ...state,
          products: [...state.products],
          totalPrice: updatedPrice,
          shoppingCart: [...state.shoppingCart],
        };
      } else {
        return state;
      }
    case 'BUY':
      return { ...state, totalPrice: 0, shoppingCart: [] };
    default:
      return state;
  }
};

export default mainReducer;
