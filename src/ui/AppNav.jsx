import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
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
