import { useEffect } from "react";
import { useCart } from "../context/ContextProvider";
import AppNav from "../ui/AppNav";
import CheckoutItem from "../ui/CheckoutItem";
import "./../css/checkout.css";

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleClick() {
    alert("Thank you for shopping with us!");
    localStorage.removeItem("cart");
    window.location.reload();
  }

  return (
    <>
      <AppNav />
      <main>
        <section>
          <div className="wrapper">
            <h1>Checkout</h1>
            {!cart.length ? (
              <div className="empty">
                <p>Your cart is empty</p>
                <img src="/img/empty-cart.png" alt="" />
              </div>
            ) : (
              <div className="checkout">
                {cart.map((item) => (
                  <CheckoutItem key={item.productId} product={item} />
                ))}
                <div className="total">
                  <p>Total: ${total}</p>
                  <button onClick={handleClick}>Checkout</button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
