import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

   let shipping = 0;
   if(total>35){

    shipping = 0;
   }
   else if(total>15){

    shipping = 4.99;
   }
   else if(total>0){

    shipping = 12.99;
   }

   const tax = (total /10);
   const grandTotal = (total + shipping + Number(tax)).toFixed(2);

   const formatNumber = num =>{

    let precision = num.toFixed(2);
    return Number(precision);
   }

    return (
        <div className="Summary">

            <h4>Order Summary :  {cart.length}</h4>
            <p>Product price : $ {formatNumber(total)}</p>
            <p><small>Shipping cost : $ {shipping}</small></p>
            <p><small>Tax + Vat : $ {formatNumber(tax)}</small></p>
            <p>Total price : $ {formatNumber(total + shipping + tax)}</p>
           
        </div>
    );
};

export default Cart;