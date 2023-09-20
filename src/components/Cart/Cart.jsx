import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart ){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax ;
    return (
        <>
        <div className='cart'>
             <h2>Order Summary</h2>
              <p>Selected Items:{quantity}</p>
              <p>Price: $ {total.toFixed(2)}</p>
              <p>Shipping: $ {shipping.toFixed(2)}</p>
              <p>Tax: $ {tax.toFixed(2)}</p>
              <h5>GrandTotal: $ {grandTotal.toFixed(2)}</h5>

             
         </div>   
        </>
    );
};

export default Cart;