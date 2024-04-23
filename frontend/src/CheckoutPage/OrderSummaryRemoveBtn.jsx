import CartRemoveBtn from "../CartPage/CartRemoveBtn";
import CheckouRemoveBn from "./CheckouRemoveBn";

function OrderSummaryRemoveBtn({ setRemove, item, isCart }) {
  console.log(isCart);
  return isCart ? (
    <CartRemoveBtn setRemove={setRemove} item={item} />
  ) : (
    <CheckouRemoveBn setRemove={setRemove} item={item} />
  );
}

export default OrderSummaryRemoveBtn;
