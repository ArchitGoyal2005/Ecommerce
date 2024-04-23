import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import ProductListItem from "./ProductListItem";
import SortBy from "./SortBy";
import Pagination from "../ui/Pagination";

import { getAllProducts } from "../services/apiProducts";

import { setProductsListSort } from "../utils/helpers";

function ProductListContainer({ price, sellerChoice, rating, discount }) {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("relevance");

  const sort = setProductsListSort(sortBy);

  const { data, isLoading } = useQuery({
    queryKey: ["products", sort, price, sellerChoice, rating, discount, page],
    queryFn: () =>
      getAllProducts(5, sort, page, price, sellerChoice, rating, discount),
  });

  return (
    <div className="bg-white m-2 flex flex-col divide-y-2">
      <div className="font-semibold pt-6 px-8 pb-1">
        <h1 className="text-lg ">
          {isLoading
            ? ""
            : `Showing ${
                data.data.data.length > 5
                  ? `${(page - 1) * 5 + 1}-${page * 5} of ${
                      data.data.data.length
                    }`
                  : ""
              } results for "motorola"`}
        </h1>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      {isLoading ? (
        ""
      ) : (
        <>
          {data.data.data.map((prod) => (
            <ProductListItem prod={prod} key={prod.id} />
          ))}
          <Pagination
            page={page}
            setPage={setPage}
            num={data.data.data.length}
            limit={5}
          />
        </>
      )}
    </div>
  );
}

export default ProductListContainer;
