import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ReviewItem from "../ReviewPage/ReviewItem";
import ReviewStats from "../ReviewPage/ReviewStats";
import ReviewList from "../ReviewPage/ReviewList";
import Pagination from "../ui/Pagination";

import { getAProduct } from "../services/apiProducts";

import { setReviewsSort } from "../utils/helpers";

function ReviewPage() {
  const [sortBy, setSortBy] = useState("helpful");
  const [page, setPage] = useState(1);

  const { productId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => getAProduct(productId),
  });

  if (isLoading) return;

  const prod = data.data.data;

  return (
    <div className="w-full grid grid-cols-[3fr_9fr] divide-x-2">
      <ReviewItem data={prod} />
      <div className="flex flex-col justify-center divide-y-2 mb-4 border-b-2">
        <div className="p-12  flex justify-between items-center">
          <div className="text-xl font-semibold flex gap-1">
            <h1>{prod?.name}</h1>
            <span>(Reviews)</span>
          </div>
          <select
            className="border-2 p-1 rounded-md border-zinc-600 text-lg font-semibold"
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
          >
            <option value="helpful">Most Helpful</option>
            <option value="recent">Most Recent</option>
            <option value="positive">Positive First</option>
            <option value="negative">Negative First</option>
          </select>
        </div>
        <div className="px-12 pt-10 pb-4">
          <ReviewStats prod={prod} />
          <ReviewList sort={setReviewsSort(sortBy)} page={page} />
        </div>
        <Pagination page={page} setPage={setPage} num={prod.ratingsQuantity} />
      </div>
    </div>
  );
}

export default ReviewPage;
