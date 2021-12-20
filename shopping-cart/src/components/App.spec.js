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
});

const setUp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
