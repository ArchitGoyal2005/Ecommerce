import { useCheckout } from "../Contexts/checkoutContext";
import OrderSummaryDetails from "../ui/OrderSummaryDetails";

function CheckoutItemSummary() {
  const { items } = useCheckout();
  return <OrderSummaryDetails data={items} />;
}

export default CheckoutItemSummary;
