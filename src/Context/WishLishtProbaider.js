import React, { createContext, useState } from "react";

export const WhislistContext = createContext([]);
const WishLishtProbaider = ({ children }) => {
  const [Wishlist, setWishlist] = useState(() => {
    const localData = localStorage.getItem("wishlist");
    return localData ? JSON.parse(localData) : [];
  });

  const addToWishlist = (product) => {
    const existingProduct = Wishlist.find((p) => p.id === product.id);
    if (existingProduct) {
      const newCart = Wishlist.map((p) => {
        if (p.id === product.id) {
          return { ...p, qty: p.qty + product.qty };
        }
        return p;
      });
      setWishlist(newCart);
      localStorage.setItem("wishlist", JSON.stringify(newCart));
    } else {
      const newCart = [...Wishlist, product];
      setWishlist(newCart);
      localStorage.setItem("wishlist", JSON.stringify(newCart));
    }
  };

  const removeFromWishlish = (productId) => {
    const newCart = Wishlist.filter((p) => p.id !== productId);
    setWishlist(newCart);
    localStorage.setItem("wishlist", JSON.stringify(newCart));
  };

  const clearWislist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  const cartTotal = Wishlist.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );

  return (
    <WhislistContext.Provider
      value={{
        cartTotal,
        clearWislist,
        removeFromWishlish,
        Wishlist,
        addToWishlist,
      }}
    >
      {children}
    </WhislistContext.Provider>
  );
};

export default WishLishtProbaider
