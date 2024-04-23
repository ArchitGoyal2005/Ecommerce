import RatingTag from "./RatingTag";

import { BsCurrencyRupee } from "react-icons/bs";

import { calculatePrice, formatCurrency } from "../utils/helpers";

function ReviewItem({ data }) {
  console.log(data);
  return (
    <div className="w-full p-10 h-lvh flex flex-col justify-center items-center">
      <div className="h-1/2 w-full">
        <img
          src={data.images[0]}
          alt={data.name}
          className="object-contain min-h-full w-full mix-blend-multiply "
        />
      </div>
      <section className="w-full my-8 h-auto">
        <h1 className="font-semibold text-lg">{data.name}</h1>
        <div className="flex justify-start gap-2 items-center mt-2">
          <RatingTag size="small">{data.ratingsAverage}</RatingTag>
          <span className="text-neutral-400 font-medium text-sm">
            {data.ratingsQuantity && `${data.ratingsQuantity} Ratings`}
            {data.reviewsQuantity && `& ${data.reviewsQuantity} Reviews`}
          </span>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex justify-start  items-center  text-xl font-semibold mt-4">
            <BsCurrencyRupee />
            <span>
              {formatCurrency(calculatePrice(data?.price, data?.discount))}
            </span>
          </div>
          <div className="flex justify-start items-center text-neutral-400 line-through text-md  mt-4">
            <span>{formatCurrency(data?.price)}</span>
          </div>
          <div className="flex justify-start items-center text-violet-800 font-semibold text-md  mt-4">
            <span>{data?.discount}% off</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewItem;
