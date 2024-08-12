"use client";
import { useState } from "react";
import "./cart.css";

const Cart = () => {
  const [quantity, setquantity] = useState<number>(1);
  

  return (
    <div className="cart">
      <div className="breadcrumb ">Home / Cart</div>
      <div className="cart-items">
        <div
          className="cart-header"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <hr />
        <div
          className="cart-item"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          <img
            src="https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg"
            alt="LCD Monitor"
            className="product-image"
          />
          <span>$650</span>
          <input
            type="number"
            value={quantity}
            style={{ border: "1px solid grey", borderRadius: "5px" }}
          />
          <span>x</span>
        </div>
      </div>
      <div className="cart-actions">
        <button className="btn" style={{ border: "1px solid black" }}>
          Return To Shop
        </button>
        <button className="btn" style={{ border: "1px solid black" }}>
          Update Cart
        </button>
      </div>

      <div className="cart-total">
        <div className="total-line">
          <span>Subtotal:</span>
          <span>$</span>
        </div>
        <div className="total-line">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total-line total">
          <span>Total:</span>
          <span>$</span>
        </div>
        <button className="btn checkout-btn" style={{ borderRadius: "none" }}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
