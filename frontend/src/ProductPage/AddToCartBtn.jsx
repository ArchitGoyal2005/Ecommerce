import { useParams } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

function AddToCartBtn() {
  const { productId } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => queryClient.invalidateQueries("cart"),
    onError: (err) => console.log(err.response.data.message),
  });

  return (
    <button
      className="rounded-sm flex gap-2 items-center justify-center w-2/5 h-14 bg-indigo-800 text-white p-4 text-xl"
      onClick={() => mutate(productId)}
      disabled={isPending}
    >
      <FaShoppingCart />
      <span>Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;
