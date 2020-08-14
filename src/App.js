import React, { useState } from "react";
import "./styles.css";
import Products from "./Products";
import Cart from "./Cart";

const PAGE_PRODUCT = "product";
const PAGE_CART = "cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(PAGE_PRODUCT);

  const addToCart = item => {
    let currentCart = [...cart];
    //console.log(currentCart[0].name);
    console.log(item + " added to Cart!");
    currentCart.push({ ...item }); //push a reference to a new object?
    setCart(currentCart);
  };

  const removeCartItem = itemToRemove => {
    // filter (with looping through)
    let newCart = cart.filter(existingItem => existingItem !== itemToRemove);

    setCart(newCart);
  };

  const navigateToCart = () => {
    console.log("Go to Cart!");

    if (page !== PAGE_CART) {
      setPage(PAGE_CART);
    }
  };

  const navigateToProducts = () => {
    console.log("Go to Product Page!");

    if (page !== PAGE_PRODUCT) {
      setPage(PAGE_PRODUCT);
    }
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateToCart()}>
          Shopping Cart({cart.length})
        </button>
        <button onClick={() => navigateToProducts()} s>
          Product Page
        </button>
      </header>

      {page === PAGE_PRODUCT && <Products handleClick={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeCartItem={removeCartItem} />
      )}
    </div>
  );
}
