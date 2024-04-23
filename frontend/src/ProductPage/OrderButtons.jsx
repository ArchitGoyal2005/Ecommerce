import AddToCartBtn from "./AddToCartBtn";
import BuyNowBtn from "./BuyNowBtn";

function OrderButtons() {
  return (
    <div className=" flex justify-end mt-4 w-10/12 gap-4 ">
      <AddToCartBtn />
      <BuyNowBtn />
    </div>
  );
}

export default OrderButtons;
