import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller,stock,price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
                
            <h4 className="product-name">{name}</h4>
          <br/>
            <p><small>by : {seller}</small></p>
            <p>${price}</p> <br/>
            <p><small>only {stock} left in stock - Order soon</small></p>
                <button onClick={()=>props.handleClickData(props.product)}className="add-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
       
       
        </div>
    );
};

export default Product;