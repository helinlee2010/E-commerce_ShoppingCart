import React from "react";
import "./styles.css";

export default function Cart({ cart, removeCartItem }) {
  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>

      <div className="cart-wrapper">
        {cart.map((item, idx) => (
          <div className="cart-items" key={idx}>
            <h4>{item.name}</h4>
            <p>$ {item.price}</p>
            <button onClick={() => removeCartItem(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
