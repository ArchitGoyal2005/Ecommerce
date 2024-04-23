import OrderOptionBox from "../CheckoutPage/OrderOptionBox";
import OrderSumarryItem from "../CheckoutPage/OrderSumarryItem";

function OrderSummaryDetails({ isCart = false, data: items }) {
  console.log(items);
  return (
    <OrderOptionBox label={isCart ? "Your Cart" : "Order Summary"}>
      <div className="flex flex-col divide-y-2">
        {items.map((item) => (
          <OrderSumarryItem key={item.id} item={item} isCart={isCart} />
        ))}
      </div>
    </OrderOptionBox>
  );
}

export default OrderSummaryDetails;
