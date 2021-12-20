import React from 'react';
import '../styles/Cart.css';

// TODO -
// 1  ADD STATES TO : TOTAL PRICE , TOTAL AMOUNT , CART ITEMS
export default function Cart() {
  return (
    <div className='cart-div'>
      <div className='cart-details'>
        <div className='cart-subj'>
          <i className='fas fa-shopping-cart'></i>{' '}
          <span className='amount'>{0}</span>
        </div>
        <div className='cart-subj'>
          <i className='fas fa-dollar-sign'></i>{' '}
          <span className='total-price'>Total price: {0}</span>{' '}
        </div>
        <div className='cart-subj'>
          <i className='fas fa-cash-register'></i> <button>Buy</button>{' '}
        </div>
      </div>
      <div className='cart-subj'>
        <h3>Items:</h3>
        <ul className='cart-items'></ul>
      </div>
    </div>
  );
}
