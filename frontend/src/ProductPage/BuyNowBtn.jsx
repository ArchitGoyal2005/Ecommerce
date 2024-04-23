import { AiFillThunderbolt } from "react-icons/ai";
import { useCheckout } from "../Contexts/checkoutContext";
import { useNavigate, useParams } from "react-router-dom";

function BuyNowBtn() {
  const { setProduct } = useCheckout();
  const navigate = useNavigate();
  const { productId } = useParams();

  function handleClick() {
    setProduct(productId);
    navigate("/checkout");
  }

  return (
    <button
      className="rounded-sm flex gap-2 items-center justify-center w-2/5 h-14 bg-indigo-900  text-white p-4 text-xl"
      onClick={handleClick}
    >
      <AiFillThunderbolt />
      <span>Buy Now</span>
    </button>
  );
}

export default BuyNowBtn;
