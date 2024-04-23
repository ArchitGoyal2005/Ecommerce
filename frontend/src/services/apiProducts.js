import axios from "axios";

export async function getAllProducts(
  num = 10,
  sort = "-createdAt,-price,-ratingsAverage",
  page = 1,
  price,
  sellerChoice,
  rating,
  discount
) {
  let filterString = "";

  if (price !== null) {
    if (price[0] !== 0) filterString += `price[gte]=${price[0]}&`;
    if (price[1] !== "MAX") filterString += `price[lte]=${price[1]}&`;
  }

  if (sellerChoice) filterString += `sellerChoice=${sellerChoice}&`;

  if (rating.length !== 0) {
    const ratingVal = Math.min(...rating);
    filterString += `ratingsAverage[gte]=${ratingVal}&`;
  }

  if (discount.length !== 0) {
    const discountVal = Math.min(...discount);
    filterString += `discount[gte]=${discountVal}&`;
  }

  const res = await axios.get(
    `/api/v1/products?${filterString}sort=${sort}&limit=${num}&page=${page}`
  );
  return res.data;
}

export async function getAProduct(id) {
  const res = await axios.get(`/api/v1/products/${id}`);
  return res.data;
}
