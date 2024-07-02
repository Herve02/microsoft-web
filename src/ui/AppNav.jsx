import React from "react";

export default function AppNav() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src="/img/logo.svg" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/checkout">Checkout</a>
            </li>
          </ul>
        </nav>
        <a href="/contact">
          <button>Contact Us</button>
        </a>
      </div>
    </header>
  );
}
