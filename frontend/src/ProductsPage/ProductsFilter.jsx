import VioletTag from "../ui/VioletTag";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

//needs a lot of refactoring

function ProductsFilter({
  values,
  setValues,
  sellerChoice,
  setSellerChoice,
  rating,
  setRating,
  discount,
  setDiscount,
}) {
  function handleChange(e, state, setState) {
    if (e.target.checked) {
      setState(() => [...state, parseInt(e.target.id)]);
    } else {
      setState(() => state.filter((item) => item !== parseInt(e.target.id)));
    }
  }

  return (
    <div className="bg-white m-2 flex flex-col divide-y-2">
      <div className="m-8">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl  font-semibold">Price</h1>
          <button
            className="bg-none text-lg text-indigo-700 font-semibold"
            onClick={() => setValues([0, "MAX"])}
          >
            Clear
          </button>
        </div>
        <div className="flex justify-between items-center">
          <select
            className="border-2 bg-none border-neutral-300 m-4 max-w-24 text-lg text-center w-full"
            onChange={(e) =>
              setValues((val) => [parseInt(e.target.value), val[1]])
            }
          >
            <option value="0">0</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
          </select>
          <span className="text-lg text-neutral-600">to</span>
          <select
            defaultValue="MAX"
            className="border-2 bg-none border-neutral-300 m-4 max-w-24 text-lg text-center w-full"
            onChange={(e) =>
              setValues((val) => [val[0], parseInt(e.target.value) || "MAX"])
            }
          >
            <option value="10000">10000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            <option value="MAX">50000+</option>
          </select>
        </div>
      </div>
      <div className="flex justify-start gap-8 p-8">
        <input
          type="checkbox"
          onChange={() => setSellerChoice(() => !sellerChoice)}
        />
        <VioletTag>
          <FaCheckCircle className={`text-lg text-gray-50 mr-1`} />
          <span className={`text-md text-gray-50 `}>Seller's Choice</span>
        </VioletTag>
      </div>
      <div className="mt-2 p-6">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl  font-semibold">Customer Ratings</h1>
          <button
            className="bg-none text-lg text-indigo-700 font-semibold"
            onClick={() => setRating([])}
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id={4}
              onChange={(e) => handleChange(e, rating, setRating)}
            />
            <div className="flex justify-center gap-0.5 items-center">
              <span className="text-lg">4</span>
              <IoIosStar className="text-md" />
              <span className="ml-1 font-semibold">& above</span>
            </div>
            <span></span>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id={3}
              onChange={(e) => handleChange(e, rating, setRating)}
            />
            <div className="flex justify-center gap-0.5 items-center">
              <span className="text-lg">3</span>
              <IoIosStar className="text-md" />
              <span className="ml-1 font-semibold">& above</span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="mt-2 p-6">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl  font-semibold">Discount</h1>
          <button
            className="bg-none text-lg text-indigo-700 font-semibold"
            onClick={() => setDiscount([])}
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id="50"
              onChange={(e) => handleChange(e, discount, setDiscount)}
            />
            <span className="text-lg">50% or above</span>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id="40"
              onChange={(e) => handleChange(e, discount, setDiscount)}
            />
            <span className="text-lg">40% or above</span>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id="30"
              onChange={(e) => handleChange(e, discount, setDiscount)}
            />
            <span className="text-lg">30% or above</span>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              name=""
              id="20"
              onChange={(e) => handleChange(e, discount, setDiscount)}
            />
            <span className="text-lg">20% or above</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsFilter;
