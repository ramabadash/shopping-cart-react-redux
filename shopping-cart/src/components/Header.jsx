import React from 'react';
import '../styles/Navbar.css';

export default function Header() {
  return (
    <div>
      <ul className='nav-bar'>
        <li style={{ float: 'left' }}>
          <h1>Shopping cart</h1>
        </li>
        <li className='buy-nav' style={{ float: 'right' }}>
          <div>
            <i className='fas fa-shopping-cart'></i>{' '}
            <span className='amount'>{0}</span>{' '}
            {/*  TODO ADD THE STATE TO HERE */}
          </div>
        </li>
        <li className='buy-nav' style={{ float: 'right' }}>
          <div>
            <i className='fas fa-dollar-sign'></i>{' '}
            <span className='total-price'>{0}</span>{' '}
            {/*  TODO ADD THE STATE TO HERE */}
          </div>
        </li>
        <li className='buy-nav' style={{ float: 'right' }}>
          <div>
            <i className='fas fa-cash-register'></i> <span>Buy</span>{' '}
          </div>
        </li>
      </ul>
    </div>
  );
}
