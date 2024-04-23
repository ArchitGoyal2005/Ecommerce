import { FaPlus } from "react-icons/fa";
import ReviewList from "../ReviewPage/ReviewList";
import ReviewStats from "../ReviewPage/ReviewStats";
import { Link } from "react-router-dom";

function RatingsAndReviews({ prod }) {
  return (
    <section className="w-11/12  my-8 border p-4  border-l-stone-200 divide-y-2">
      <div className="flex justify-between items-center mx-3 mt-2 mb-4">
        <h1 className=" font-semibold  text-2xl ">Ratings & Reviews</h1>
        <Link
          to="./reviews"
          className="rounded-sm flex gap-2 items-center justify-center font-medium border shadow-lg h-14 p-4 text-lg"
        >
          Rate Product
        </Link>
      </div>
      <ReviewStats prod={prod} />
      <ReviewList num={3} />
      <div className="flex justify-between items-center px-2 pt-3 text-indigo-900">
        <Link to="./reviews" className="font-semibold">
          View all Reviews
        </Link>
        <Link to="./reviews">
          <FaPlus />
        </Link>
      </div>
    </section>
  );
}

export default RatingsAndReviews;
