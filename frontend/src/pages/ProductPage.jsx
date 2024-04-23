import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import ProductImage from "../ProductPage/ProductImage";
import ProductContent from "../ProductPage/ProductContent";
import { getAProduct } from "../services/apiProducts";

function ProductPage() {
  const { productId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getAProduct(productId),
  });
  if (isLoading) return;
  return (
    <div className="w-full grid grid-cols-2">
      <ProductImage data={data.data.data.images} />
      <ProductContent data={data.data.data} />
    </div>
  );
}

export default ProductPage;
