import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
   const {name, img, price, seller, ratings} =props.products
const {handleAddToCart} = props;
    return (
        <div className='product'>
          <img src={img} alt=""></img>
         <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rateings:{ratings} stars</small></p>
         </div>
<button onClick={() => props.handleAddToCart(props.products)}  className='btn-card'>
    <p className='btn-text'>Add to cart</p>
    <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
</button>
        </div>
    );
};

export default Product;