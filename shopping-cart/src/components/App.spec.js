import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';
import rootReducer from '../reducers/mainReducer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

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

  describe('Buy one item (first item)', () => {
    beforeAll(() => {
      const component = setUp();
      // Press on buy item
      const firstAddToCart = component.container.querySelector('.add-to-cart');
      fireEvent.click(firstAddToCart);
    });
    test('quantity is down by 1', () => {
      const component = setUp();
      const firstQuantity = component.container.querySelector('.quantity-span');
      expect(firstQuantity).toHaveTextContent('7');
    });

    test('total amount is up by 1', () => {
      const component = setUp();
      const amount = component.container.querySelector('.amount');
      expect(amount).toHaveTextContent('1');
    });

    test('total price is up by 50.01', () => {
      const component = setUp();
      const totalPrice = component.container.querySelector('.total-price');
      expect(totalPrice).toHaveTextContent('50.01');
    });
  });

  describe('BUY event', () => {
    beforeAll(() => {
      const component = setUp();
      // Press on add to cart X 2 + 1 from last test
      const firstAddToCart = component.container.querySelector('.add-to-cart');
      fireEvent.click(firstAddToCart);
      fireEvent.click(firstAddToCart);
    });

    test('buy button is not disabled', () => {
      const component = setUp();
      const buyBtn = component.container.querySelector('.buy-btn');
      expect(buyBtn).not.toHaveAttribute('disabled');
    });

    test('total price and amount resets', () => {
      const component = setUp();
      const totalPrice = component.container.querySelector('.total-price');
      expect(totalPrice).toHaveTextContent('150.03');

      const amount = component.container.querySelector('.amount');
      expect(amount).toHaveTextContent('3');

      const buyBtn = component.container.querySelector('.buy-btn');
      fireEvent.click(buyBtn);
      expect(totalPrice).toHaveTextContent('0');
      expect(amount).toHaveTextContent('0');
    });

    test('product quantity is the same', () => {
      const component = setUp();
      const firstQuantity = component.container.querySelector('.quantity-span');
      expect(firstQuantity).toHaveTextContent('5');
    });
  });
});

const setUp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
