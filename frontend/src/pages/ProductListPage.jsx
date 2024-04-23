import { useState } from "react";
import ProductListContainer from "../ProductsPage/ProductListContainer";
import ProductsFilter from "../ProductsPage/ProductsFilter";

function ProductListPage() {
  const [values, setValues] = useState([0, "MAX"]);
  const [sellerChoice, setSellerChoice] = useState(false);
  const [rating, setRating] = useState([]);
  const [discount, setDiscount] = useState([]);
  console.log(values);
  return (
    <div className="grid grid-cols-[1fr_3fr]  bg-slate-100">
      <ProductsFilter
        values={values}
        setValues={setValues}
        sellerChoice={sellerChoice}
        setSellerChoice={setSellerChoice}
        rating={rating}
        setRating={setRating}
        discount={discount}
        setDiscount={setDiscount}
      />
      <ProductListContainer
        price={values}
        sellerChoice={sellerChoice}
        rating={rating}
        discount={discount}
      />
    </div>
  );
}

export default ProductListPage;
