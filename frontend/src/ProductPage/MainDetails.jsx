import { FaCheckCircle } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

import VioletTag from "../ui/VioletTag";
import RatingTag from "../ReviewPage/RatingTag";
import { calculatePrice, formatCurrency } from "../utils/helpers";
function MainDetails({ size, prod }) {
  return (
    <section className="w-full my-12 mr-14 ">
      <h1 className={`font-semibold text-${size === "small" ? "xl" : "2xl"} `}>
        {prod?.name}
      </h1>
      <div
        className={`flex justify-start gap-${
          size === "small" ? "2" : "4"
        } items-center mt-3`}
      >
        <RatingTag size={size}>{prod?.ratingsAverage}</RatingTag>
        <span
          className={`text-neutral-400 font-semibold text-${
            size === "small" ? "md" : "lg"
          }`}
        >
          {prod.ratingsQuantity && `${prod.ratingsQuantity} Ratings`}
          {prod.reviewsQuantity && `& ${prod.reviewsQuantity} Reviews`}
        </span>
        {prod?.sellerChoice && (
          <VioletTag>
            <FaCheckCircle
              className={`text-${
                size === "small" ? "lg" : "xl"
              } text-gray-50 mr-1`}
            />
            <span
              className={`text-${size === "small" ? "md" : "lg"} text-gray-50 `}
            >
              Seller's Choice
            </span>
          </VioletTag>
        )}
      </div>
      <div className={`flex items-end gap-${size === "small" ? "3" : "4"}`}>
        <div
          className={`flex justify-start  items-center  text-${
            size === "small" ? "3xl" : "4xl"
          } font-semibold mt-8`}
        >
          <BsCurrencyRupee />
          <span>
            {formatCurrency(calculatePrice(prod?.price, prod?.discount))}
          </span>
        </div>
        {prod?.discount !== 0 && (
          <>
            <div
              className={`flex justify-start items-center text-neutral-400 line-through text-${
                size === "small" ? "lg" : "xl"
              }  mt-8`}
            >
              <span>{formatCurrency(prod?.price)}</span>
            </div>
            <div className="flex justify-start items-center text-violet-800 font-semibold text-xl  mt-8">
              <span>{prod?.discount}% off</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MainDetails;
