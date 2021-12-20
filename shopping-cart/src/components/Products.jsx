import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingActions';
import '../styles/Products.css';

function Products({ products, addToCart }) {
  return (
    <div>
      <h2>Products:</h2>
      <div className='products-container'>
        {products ? (
          products.map(product => {
            return (
              <div className='product-div' key={product.id}>
                <span>{product.name}</span> <span>Price: {product.price}$</span>{' '}
                <span className='quantity-span'>
                  Quantity: {product.quantity}
                </span>
                <div>
                  <button
                    className='add-to-cart'
                    onClick={() => addToCart(product.id)}
                    disabled={product.quantity === 0}
                  >
                    <i className='fas fa-cart-plus'></i> Add to cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No items left, come back tomorrow!</p>
        )}
      </div>
    </div>
  );
}

// Get products from state
const mapStateToProps = state => {
  return { products: state.products };
};

const mapDispatchToProps = dispatch => {
  return { addToCart: id => dispatch(addToCart(id)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
