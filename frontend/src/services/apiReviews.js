import axios from "axios";

export const getRatingsByStars = async (productId) => {
  const res = await axios.get(
    `/api/v1/products/${productId}/reviews/ratingByStars`
  );
  return res.data.data;
};

export const getRatings = async (
  productId,
  num = 10,
  sort = "-rating,-createdAt",
  page = 1
) => {
  const res = await axios.get(
    `/api/v1/products/${productId}/reviews?sort=${sort}&page=${page}&limit=${num}`
  );
  return res.data.data;
};
