import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import rootReducer from '../reducers/mainReducer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { prettyDOM } from '@testing-library/react';

const store = createStore(rootReducer);

describe('<App />', () => {
  test('renders header', () => {
    const component = setUp();
    const header = component.container.querySelector('h1');
    expect(header).toHaveTextContent('Shopping cart');
  });

  describe('<Cart />', () => {
    test('initial state empty', () => {
      const component = setUp();
      const amount = component.container.querySelector('.amount');
      const totalPrice = component.container.querySelector('.total-price');
      const cartItems = component.container.querySelector('.cart-items');
      expect(amount).toHaveTextContent('0');
      expect(totalPrice).toHaveTextContent('0');
      expect(cartItems).toHaveTextContent('Add items to cart!');
    });
    test('buy button is disable when empty', () => {
      const component = setUp();
      const buyBtn = component.container.querySelector('.buy-btn');
      expect(buyBtn).toHaveAttribute('disabled');
    });
  });

  describe('Buy one item', () => {
    test('quantity is down by 1', () => {
      const component = setUp();
      const firstQuantity = component.container.querySelector('.quantity-span');
      expect(firstQuantity).toHaveTextContent('8');
      // Press on buy item
      const firstAddToCart = component.container.querySelector('.add-to-cart');
      fireEvent.click(firstAddToCart);
      expect(firstQuantity).toHaveTextContent('7');
    });
  });
});

const setUp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
