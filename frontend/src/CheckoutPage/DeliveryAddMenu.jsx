import { useState } from "react";
import DeliveryAddress from "./DeliveryAddress";
import NewAddressButton from "./NewAddressButton";
import { FaCheck } from "react-icons/fa6";
import OrderOptionBox from "./OrderOptionBox";

function DeliveryAddMenu({ addSelected, setAddSelected }) {
  const [selected, setSelected] = useState(1);

  if (addSelected)
    return (
      <div className="bg-white flex justify-between items-center p-8 h-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-3 items-center">
            <span className=" text-neutral-400 font-bold text-xl uppercase">
              Delivery Address{" "}
            </span>
            <FaCheck className="text-indigo-900 font-semibold" />
          </div>
          <div className="text-lg font-semibold">{addSelected}</div>
        </div>
        <button
          className="border-neutral-400 border-2 p-2 font-semibold text-indigo-900 uppercase w-1/6 rounded-sm"
          onClick={() => setAddSelected("")}
        >
          Change
        </button>
      </div>
    );
  return (
    <div className="divide-y-8 bg-white">
      <OrderOptionBox label={"Delivery Address"}>
        <DeliveryAddress
          id={1}
          selected={selected}
          setSelected={setSelected}
          setAddSelected={setAddSelected}
        />
        <DeliveryAddress
          id={2}
          setSelected={setSelected}
          selected={selected}
          setAddSelected={setAddSelected}
        />
      </OrderOptionBox>
      <NewAddressButton />
    </div>
  );
}

export default DeliveryAddMenu;
