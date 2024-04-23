import { useQuery } from "@tanstack/react-query";
import { priceSummary } from "../services/apiCart";
import { formatCurrency } from "../utils/helpers";
import { useCheckout } from "../Contexts/checkoutContext";
import CartOrderNowBtn from "../CartPage/CartOrderNowBtn";
import PlaceYourOrder from "./PlaceYourOrder";

function PriceSummary({ isCart }) {
  const { items } = useCheckout();
  let itemData;
  isCart ? (itemData = []) : (itemData = items);
  if (items[0]?.product && items[0].product === null) itemData = [];

  const { data, isLoading } = useQuery({
    queryKey: ["cartPrice", itemData],
    queryFn: () => priceSummary(itemData),
  });

  if (isLoading) return <p></p>;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col divide-y-2">
        <h1 className="text-xl p-6 uppercase bg-white text-neutral-400 font-semibold">
          Price Details
        </h1>
        <div className="flex flex-col  bg-white">
          <div className="flex justify-between items-center text-xl p-6">
            <span>
              Price (<span>{data?.totalItems}</span> items)
            </span>
            <span>{formatCurrency(data?.totalPrice)}</span>
          </div>
          <div className="flex justify-between items-center text-xl p-6">
            <span>Discount</span>
            <span className="text-green-700">
              - <span>{formatCurrency(data?.totalDiscount)}</span>
            </span>
          </div>
          <div className="flex justify-between items-center text-xl p-6">
            <span>Delivery Charges</span>
            <span className={data?.delivery === 0 ? "text-green-700" : ""}>
              {data?.delivery === 0
                ? "FREE"
                : data?.delivery * data?.totalItems}
            </span>
          </div>
        </div>
        <div className="bg-white p-6 flex justify-between items-center">
          <span className="font-semibold text-xl">Total Amount</span>
          <span className="font-semibold text-xl">
            {formatCurrency(data?.totalBilledPrice)}
          </span>
        </div>
      </div>
      {isCart ? (
        <CartOrderNowBtn />
      ) : (
        <PlaceYourOrder delivery={data?.delivery} />
      )}
    </div>
  );
}

export default PriceSummary;
