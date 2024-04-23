import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getCart } from "../services/apiCart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <CartContext.Provider value={{ cart: data.data }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the UserProvider");
  return context;
}
