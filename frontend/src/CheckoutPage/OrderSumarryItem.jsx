import { useQuery } from "@tanstack/react-query";
import { getAProduct } from "../services/apiProducts";
import ProductListItem from "../ProductsPage/ProductListItem";
import OrderSummaryOptions from "./OrderSummaryOptions";

function OrderSumarryItem({ item, isCart }) {
  const { data, isLoading } = useQuery({
    queryKey: ["product", item.id],
    queryFn: () => getAProduct(item.product),
  });

  if (isLoading) return null;
  const prod = data.data.data;
  return (
    <div className="bg-white w-full">
      <ProductListItem prod={prod} padding={false} />
      <OrderSummaryOptions item={item} isCart={isCart} />
    </div>
  );
}

export default OrderSumarryItem;
