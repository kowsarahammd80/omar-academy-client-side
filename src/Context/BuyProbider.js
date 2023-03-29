import React, { createContext, useEffect, useState } from "react";

export const BuynowContext = createContext([]);
const BuyProbider= ({ children }) => {

const [cartProduct, setCartProduct] = useState(null);



useEffect(() => {
  const cartData = localStorage.getItem('buy');
  if (cartData) {
    setCartProduct(JSON.parse(cartData));
    
  }
  
}, [cartProduct]);

useEffect(() => {
  if (cartProduct) {
    localStorage.setItem('buy', JSON.stringify(cartProduct));
  } else {
    localStorage.removeItem('buy');
  }
}, [cartProduct]);

const addToCart = (product) => {
    setCartProduct(product);
};

const buyNow = () => {
  // Here you can implement the logic to buy the product
  // For example, you can send a request to a server to process the payment
  // and update the inventory database
  console.log('Product bought:', cartProduct);
  setCartProduct(null);
  localStorage.removeItem('buy');
};




 

  return (
    <BuynowContext.Provider
      value={{ addToCart ,cartProduct }}
    >
      {children}
    </BuynowContext.Provider>
  );
};

export default BuyProbider;
