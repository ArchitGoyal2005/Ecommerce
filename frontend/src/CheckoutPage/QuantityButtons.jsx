import CartQuantityButtons from "../CartPage/CartQuantityButtons";
import CheckoutQtyBtns from "./CheckoutQtyBtns";

function QuantityButtons({ setRemove, item, isCart }) {
  return isCart ? (
    <CartQuantityButtons setRemove={setRemove} item={item} />
  ) : (
    <CheckoutQtyBtns setRemove={setRemove} item={item} />
  );
}

export default QuantityButtons;
