import { createContext, useState, useContext } from "react";

const CheckoutContext = createContext();

export function CheckoutContextProvider({ children }) {
  const [items, setItems] = useState([
    { product: null, id: null, quantity: 0 },
  ]);

  function setProduct(productId) {
    setItems([
      {
        product: productId,
        id: productId,
        quantity: 1,
      },
    ]);
  }

  function setQuantity(productId, qty) {
    setItems((curr) =>
      curr.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: qty,
          };
        }
        return item;
      })
    );
  }

  function removeProduct(productId) {
    setItems((items) => items.filter((item) => item.id !== productId));
  }

  return (
    <CheckoutContext.Provider
      value={{ items, setItems, setProduct, setQuantity, removeProduct }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined)
    throw new Error("CheckoutContext was used outside the CheckoutProvider");
  return context;
}
