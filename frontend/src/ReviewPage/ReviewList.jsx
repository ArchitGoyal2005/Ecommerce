import { useQuery } from "@tanstack/react-query";
import Review from "./Review";
import { getRatings } from "../services/apiReviews";
import { useParams } from "react-router-dom";

function ReviewList({ num, sort, page }) {
  const { productId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["reviews", productId, num, sort, page],
    queryFn: () => getRatings(productId, num, sort, page),
  });
  if (isLoading) return;
  return (
    <div className="divide-y-2 mt-2">
      {data.data.map((rev) => (
        <Review key={rev.id} rev={rev} />
      ))}
    </div>
  );
}

export default ReviewList;
