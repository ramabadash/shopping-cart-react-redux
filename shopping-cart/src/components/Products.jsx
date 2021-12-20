import React from 'react';
import { connect } from 'react-redux';
import '../styles/Products.css';

function Products({ products }) {
  return (
    <div>
      <h2>Products:</h2>
      <div className='products-container'>
        {products ? (
          products.map(product => {
            return (
              <div className='product-div' key={product.id}>
                <span>{product.name}</span> <span>Price: {product.price}$</span>{' '}
                <span>Quantity: {product.quantity}</span>
                <div>
                  <button className='add-to-cart'>
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

export default connect(mapStateToProps, null)(Products);
