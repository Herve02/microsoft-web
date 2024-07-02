import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import ProductItem from "../ui/ProductItem";

import "./../css/products.css";
import AppNav from "../ui/AppNav";
import { useCart } from "../context/ContextProvider";

export default function Products() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  console.log(cart);

  useEffect(() => {
    setLoading(true);
    fetch("https://microsoft-shop-bn.onrender.com/getAllProducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <AppNav />
      <main>
        <section>
          <div className="wrapper">
            <h1>Products</h1>

            {loading && <Loader />}
            {error && <h1 style={{ textAlign: "center" }}>{error}</h1>}
            {products?.length > 0 && (
              <div className="products">
                {products.map((product) => (
                  <ProductItem key={product.productId} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
