import React from 'react';
import { connect } from 'react-redux';
import { buy } from '../actions/shoppingActions';
import '../styles/Cart.css';

function Cart({ totalPrice, shoppingCart, buy }) {
  /*****  FUNCTIONS *****/
  // Get total quantity of items
  const getAmountFromCart = () => {
    const sum =
      shoppingCart.length > 0
        ? shoppingCart.reduce(
            (previousValue, { quantity }) => previousValue + quantity,
            0
          )
        : 0;
    return sum;
  };

  return (
    <div className='cart-div'>
      <div className='cart-details'>
        <div className='cart-subj'>
          <i className='fas fa-shopping-cart'></i>{' '}
          <span className='amount'>{getAmountFromCart()}</span>
        </div>
        <div className='cart-subj'>
          <i className='fas fa-dollar-sign'></i>{' '}
          <span className='total-price'>Total price: {totalPrice}</span>{' '}
        </div>
        <div className='cart-subj'>
          <i className='fas fa-cash-register'></i>{' '}
          <button onClick={buy}>Buy</button>{' '}
        </div>
      </div>
      <div className='cart-subj'>
        <h3>Items:</h3>
        <ul className='cart-items'>
          {shoppingCart.length > 0 ? (
            shoppingCart.map(product => (
              <li key={product.id}>
                {product.name} | {product.quantity}
              </li>
            ))
          ) : (
            <p>Add items to cart!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

// Get products from state
const mapStateToProps = state => {
  return {
    totalPrice: state.totalPrice,
    shoppingCart: state.shoppingCart,
  };
};

// Get buy function
const mapDispatchToProps = dispatch => {
  return { buy: () => dispatch(buy()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
