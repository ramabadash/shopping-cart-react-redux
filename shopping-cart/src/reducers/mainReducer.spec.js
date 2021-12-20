import mainReducer from './mainReducer';

/*****  STATES : PRIMARY , FULL CART, AFTER BUYING FULL CART *****/
import { primaryState } from './mainReducer';
const midShoppingState = {
  products: [
    { id: 1, name: 'Jeans', price: 50.01, quantity: 6 },
    { id: 2, name: 'T- shirt', price: 10.99, quantity: 5 },
    { id: 3, name: 'Coat', price: 80.99, quantity: 5 },
    { id: 4, name: 'Shoes', price: 100.99, quantity: 5 },
  ],
  totalPrice: 154.97,
  shoppingCart: [
    { id: 1, name: 'Jeans', quantity: 2 },
    { id: 2, name: 'T- shirt', quantity: 5 },
  ],
};

const afterBuyState = {
  products: [
    { id: 1, name: 'Jeans', price: 50.01, quantity: 6 },
    { id: 2, name: 'T- shirt', price: 10.99, quantity: 5 },
    { id: 3, name: 'Coat', price: 80.99, quantity: 5 },
    { id: 4, name: 'Shoes', price: 100.99, quantity: 5 },
  ],
  totalPrice: 0,
  shoppingCart: [],
};

describe('main reducer', () => {
  it('should handle initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(primaryState);
  });

  it('should handle BUY', () => {
    expect(mainReducer(midShoppingState, { type: 'BUY' })).toEqual(
      afterBuyState
    );
  });
});
