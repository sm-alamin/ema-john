import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd)=> total + prd.price ,0);
    let shiftCost = 0;
    if (total > 35) {
        shiftCost = 0;
    }else if(total > 15){
        shiftCost = 5;
    }else if(total > 0){
        shiftCost = 9.99;
    }
    let tax = 0;
   if(total < 100){
    tax = 0;
   }else if(total > 100){
    tax = total * .15;
   }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Price: ${total}</p>
            <p>Shifting cost: ${shiftCost}</p>
            <p>tax: ${tax}</p>
            <p>Total: ${total + shiftCost + tax}</p>
        </div>
    );
};

export default Cart;