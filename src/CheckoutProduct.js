import React from "react";
import "./Checkoutproduct.css";

const CheckoutProduct = () => {
  return (
      <div className="checkout_Product">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6iF0V8qXuNDVmoDlqCOhq2fglsXWTvphow&usqp=CAU" alt=""
      className="checkoutProduct_image" />

      <div className="checkoutproduct_info">
        <div className="checkoutproduct_title">
            <p>Satya ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
            <p className="checkoutProduct_price">
              <small>$</small>
              <strong>20</strong>
            </p>
            <div className="checkoutproduct_rating">
              ⭐⭐
            </div>
            <button className="checkproduct_button">Remove from Basket</button>
        </div>
      </div>
      </div>
  );
};

export default CheckoutProduct;
