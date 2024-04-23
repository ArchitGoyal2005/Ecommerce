import axios from "axios";

export async function createOrder(productDetails, deliveryCharges) {
  const res = await axios.post("/api/v1/orders", {
    productDetails,
    deliveryCharges,
  });
  return res.data.data;
}
