import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQty } from "../services/apiCart";
import QtyBtnsLayout from "../ui/QtyBtnsLayout";

function CartQuantityButtons({ setRemove, item }) {
  const qty = item.quantity;
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (quantity) => updateQty(item.id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      queryClient.invalidateQueries("cartPrice");
    },
  });

  function handleDecrease() {
    if (qty === 1) return setRemove(true);
    mutate(qty - 1);
  }
  function handleIncrease() {
    setRemove(false);
    mutate(qty + 1);
  }
  return (
    <QtyBtnsLayout
      handleDecrease={handleDecrease}
      handleIncrease={handleIncrease}
      isLoading={isLoading}
      qty={qty}
    />
  );
}

export default CartQuantityButtons;
