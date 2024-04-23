import { useState } from "react";
import QuantityButtons from "./QuantityButtons";
import OrderSummaryRemoveBtn from "./OrderSummaryRemoveBtn";

function OrderSummaryOptions({ item, isCart }) {
  const [remove, setRemove] = useState(false);
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="flex gap-16">
          <QuantityButtons setRemove={setRemove} item={item} isCart={isCart} />
          <button
            className="border-2 p-3 font-semibold text-indigo-800"
            onClick={() => setRemove(true)}
          >
            Remove
          </button>
        </div>
        <span className="p-8 text-lg font-semibold">Delivery by 24 Jan</span>
      </div>
      {remove && (
        <OrderSummaryRemoveBtn
          setRemove={setRemove}
          item={item}
          isCart={isCart}
        />
      )}
    </>
  );
}

export default OrderSummaryOptions;
