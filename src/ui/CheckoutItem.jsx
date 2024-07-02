import { useEffect } from "react";
import { useCart } from "../context/ContextProvider";

function CheckoutItem({ product }) {
  const { setCart } = useCart();
  const total = product.price * product.quantity;

  function handleClick(product) {
    setCart((cart) =>
      cart.filter((item) => item.productId !== product.productId)
    );
  }
  return (
    <div className="checkout-item">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <p className="name">{product.name}</p>
      <p>Total: ${total}</p>
      <button onClick={() => handleClick(product)}>&#10006;</button>
    </div>
  );
}

export default CheckoutItem;
