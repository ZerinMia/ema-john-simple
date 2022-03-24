import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const { handelAddToCart, product } = props;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product_info'>
                <p className='product_name'>{name}</p>
                <p>Price: $ {price} </p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Raitings: {ratings} stars</small></p>
            </div>
            <button onClick={() => { handelAddToCart(product) }} className='btn_cart'>
                <p className='btn_text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;