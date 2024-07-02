import { useEffect } from "react";
import { useCart } from "../context/ContextProvider";
import "./../css/products.css";

function ProductItem({ product }) {
  const { cart, setCart } = useCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  function handleClick(product) {
    const item = cart.find((item) => item.productId === product.productId);
    if (item) {
      setCart(
        cart.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert("Added to cart, Please go to checkout page to checkout");
  }
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div className="bottom">
        <div>
          <p className="name">{product.name}</p>
          <p className="category">{product.category}</p>
          <p>${product.price}</p>
        </div>
        <button onClick={() => handleClick(product)}>+</button>
      </div>
    </div>
  );
}

export default ProductItem;
