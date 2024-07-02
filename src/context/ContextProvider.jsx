import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

function ContextProvider({ children }) {
  const [cart, setCart] = useState(function () {
    const value = JSON.parse(localStorage.getItem("cart"));
    return value || [];
  });
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { ContextProvider, useCart };
