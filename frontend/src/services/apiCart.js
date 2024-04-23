import axios from "axios";

export async function getCart() {
  const res = await axios.get("/api/v1/users/getCart");
  return res.data.data;
}

export async function updateQty(cartItemId, quantity) {
  const res = await axios.patch("/api/v1/users/cart/updateQuantity", {
    cartItemId,
    quantity,
  });
  return res.data.data;
}

export async function removeFromCart(product) {
  const res = await axios.patch("/api/v1/users/removeFromCart", { product });
  return res.data.data;
}

export async function addToCart(product) {
  const res = await axios.patch("/api/v1/users/addToCart", { product });
  return res.data.data;
}

export async function priceSummary(items) {
  const res = await axios.get(
    `/api/v1/users/getCartPriceSummary?cart=${JSON.stringify(items)}`
  );
  return res.data.data;
}
