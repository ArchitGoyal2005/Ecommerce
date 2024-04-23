import { FaLocationDot } from "react-icons/fa6";
import { checkPincode, getDeliveryDate } from "../utils/helpers";
import { useState } from "react";

function CheckDeliveryPincode() {
  const [pin, setPin] = useState("");
  return (
    <div>
      <div className="flex items-center justify-evenly gap-3 border-b-4 border-indigo-900">
        <FaLocationDot />
        <input
          type="text"
          className="outline-none placeholder:text-lg text-lg font-semibold "
          placeholder="Enter Delivery Pincode"
          onChange={(e) => setPin(e.target.value)}
        />
        <button className="text-lg text-indigo-900 font-semibold">Check</button>
      </div>
      <div className="mt-2">
        {pin === "" || pin.length < 6 ? (
          <span></span>
        ) : !checkPincode(pin) ? (
          <span className="text-lg font-semibold text-red-400">
            Enter a valid pincode
          </span>
        ) : (
          <span className="text-lg font-semibold">
            {getDeliveryDate()}
            <span className="text-neutral-600"> | </span>
            <span className=" text-indigo-900">Free</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default CheckDeliveryPincode;
