import QtyBtnsLayout from "../ui/QtyBtnsLayout";
import { useCheckout } from "../Contexts/checkoutContext";

function CheckoutQtyBtns({ setRemove, item }) {
  const qty = item.quantity;
  const { setQuantity } = useCheckout();
  function handleDecrease() {
    if (qty === 1) return setRemove(true);
    setQuantity(item.id, qty - 1);
  }
  function handleIncrease() {
    setRemove(false);
    setQuantity(item.id, qty + 1);
  }

  console.log(qty);
  return (
    <QtyBtnsLayout
      handleDecrease={handleDecrease}
      handleIncrease={handleIncrease}
      qty={qty}
    />
  );
}

export default CheckoutQtyBtns;
