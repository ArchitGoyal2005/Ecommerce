import { useCart } from "../Contexts/cartContext";
import OrderSummaryDetails from "../ui/OrderSummaryDetails";

function CartItemSummary() {
  const { cart } = useCart();

  return <OrderSummaryDetails isCart={true} data={cart} />;
}

export default CartItemSummary;
