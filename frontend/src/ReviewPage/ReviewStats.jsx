import { IoIosStar } from "react-icons/io";
import ReviewChart from "./ReviewChart";

function ReviewStats({ prod }) {
  return (
    <div className="flex divide-x-2 max-w-[600px]">
      <div className="w-1/4 flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <span className="text-4xl">{prod?.ratingsAverage}</span>
          <IoIosStar className="text-4xl" />
        </div>
        <span className="text-neutral-400 font-semibold text-md text-center w-11/12">
          {prod?.ratingsQuantity && `${prod?.ratingsQuantity} Ratings`}
          {prod?.reviewsQuantity && `& ${prod?.reviewsQuantity} Reviews`}
        </span>
      </div>
      <ReviewChart />
    </div>
  );
}

export default ReviewStats;
