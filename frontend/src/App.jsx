import { useUser } from "./Contexts/userContext";
import Router from "./Routes";
import { CartProvider } from "./Contexts/cartContext";
import { CheckoutContextProvider } from "./Contexts/checkoutContext";

function App() {
  const { user } = useUser();

  return user === null ? (
    <Router />
  ) : (
    <CartProvider>
      <CheckoutContextProvider>
        <Router />
      </CheckoutContextProvider>
    </CartProvider>
  );
}

export default App;
