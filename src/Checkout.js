import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowqcWlB5BLE9oT8BGGAjxj3oTWEaF4ofEaA&usqp=CAU" alt="" className='checkout_ad'/>
           
        <div>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            <CheckoutProduct/>
            </div>
        </div>
        <div className="checkout-right">
            <Subtotal/>
        </div>
        </div>
  )
}

export default Checkout