import { FaCheckCircle } from "react-icons/fa";
import RatingTag from "./RatingTag";
import ReviewLike from "./ReviewLike";

function Review({ rev }) {
  return (
    <div className=" flex flex-col gap-2 mb-4">
      <div className="flex justify-start gap-4 w-auto mt-4 h-auto">
        <RatingTag>{rev.rating}</RatingTag>
        <span className="font-medium text-xl">{rev.review}</span>
      </div>
      <div className="text-neutral-400 flex text-md font-semibold justify-between">
        <div className="flex items-center">
          <span className="mr-2">{rev.user.name}</span>
          <span className="flex items-center">
            <FaCheckCircle className="text-sm mr-1" />
            <span className="text-sm">
              Verified Buyer, {rev.user.address[0].city}
            </span>
          </span>
        </div>
        <ReviewLike likes={rev.likes} dislikes={rev.dislikes} />
      </div>
    </div>
  );
}

export default Review;
