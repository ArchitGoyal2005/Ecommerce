import CartItemSummary from "../CartPage/CartItemSummary";
import CheckoutItemSummary from "./CheckoutItemSummary";

function OrderSummary({ addSelected, isCart }) {
  if (addSelected === "")
    return (
      <div className="bg-white flex justify-between items-center p-8 h-auto">
        <div className="flex justify-start gap-3 items-center  text-neutral-400 font-bold text-xl uppercase">
          Order Summary
        </div>
      </div>
    );
  return isCart ? <CartItemSummary /> : <CheckoutItemSummary />;
}

export default OrderSummary;
