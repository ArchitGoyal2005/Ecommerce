import { useState } from "react";
import DeliveryAddMenu from "./DeliveryAddMenu";
import OrderSummary from "./OrderSummary";
import PriceSummary from "./PriceSummary";

function CheckoutDetails({ isCart }) {
  const [addSelected, setAddSelected] = useState("");
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-4 p-4 h-auto bg-slate-100">
      <div className="flex flex-col gap-6 ">
        {!isCart && (
          <DeliveryAddMenu
            addSelected={addSelected}
            setAddSelected={setAddSelected}
          />
        )}
        <OrderSummary addSelected={!isCart && addSelected} isCart={isCart} />
      </div>
      <PriceSummary isCart={isCart} />
    </div>
  );
}

export default CheckoutDetails;
