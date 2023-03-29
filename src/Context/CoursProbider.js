import React, { createContext, useState } from "react";

export const CoursContext = createContext([]);
const CoursProbider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const newCart = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, qty: p.qty + product.qty };
        }
        return p;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((p) => p.id !== productId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const cartTotal = cart.reduce((total, product) => {
    return total + (product.price || 0) * product.qty;
  }, 0);

  console.log(cartTotal);

  return (
    <CoursContext.Provider
      value={{
        cartTotal,
        clearCart,

        removeFromCart,
        cart,
        addToCart,
      }}
    >
      {children}
    </CoursContext.Provider>
  );
};

export default CoursProbider;
