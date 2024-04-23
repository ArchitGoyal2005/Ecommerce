import { useCart } from "../Contexts/cartContext";
import { useCheckout } from "../Contexts/checkoutContext";
import { useNavigate } from "react-router-dom";

function CartOrderNowBtn() {
  const { cart } = useCart();
  const { setItems } = useCheckout();
  const navigate = useNavigate();

  function handleClick() {
    setItems(cart);
    navigate("/checkout");
  }

  return (
    <button
      className="text-xl bg-indigo-900 w-1/2 self-center text-white font-semibold h-12 rounded-md"
      onClick={handleClick}
    >
      Order Now
    </button>
  );
}

export default CartOrderNowBtn;
