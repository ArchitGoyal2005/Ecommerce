import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../services/apiCart";
import RemoveBtnLayout from "../ui/RemoveBtnLayout";

function CartRemoveBtn({ setRemove, item }) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      console.log("abc");
      queryClient.invalidateQueries("cart");
      queryClient.invalidateQueries("cartPrice");
    },
  });

  function handleClick() {
    mutate(item.product);
  }

  return (
    <RemoveBtnLayout
      setRemove={setRemove}
      item={item}
      handleClick={handleClick}
      isPending={isPending}
    />
  );
}

export default CartRemoveBtn;
