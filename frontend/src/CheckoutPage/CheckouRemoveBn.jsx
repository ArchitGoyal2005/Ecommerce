import { useCheckout } from "../Contexts/checkoutContext";
import RemoveBtnLayout from "../ui/RemoveBtnLayout";

function CheckouRemoveBn({ setRemove, item }) {
  const { removeProduct } = useCheckout();

  function handleClick() {
    removeProduct(item.id);
  }

  return <RemoveBtnLayout setRemove={setRemove} handleClick={handleClick} />;
}

export default CheckouRemoveBn;
