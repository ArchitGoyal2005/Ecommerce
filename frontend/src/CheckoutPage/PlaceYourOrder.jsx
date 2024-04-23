import { useMutation } from "@tanstack/react-query";
import { useCheckout } from "../Contexts/checkoutContext";
import { createOrder } from "../services/apiModel";

function PlaceYourOrder({ delivery }) {
  const { items } = useCheckout();
  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
  });
  return (
    <button
      className="text-xl bg-indigo-900 w-1/2 self-center text-white font-semibold h-12 rounded-md"
      onClick={() => mutate(items, delivery)}
      disabled={isPending}
    >
      Place Your Order
    </button>
  );
}

export default PlaceYourOrder;
