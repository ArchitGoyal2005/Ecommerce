export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 8 }).format(
    Math.trunc(value)
  );

export const calculatePrice = (value, dis) => value - (value * dis) / 100;

export const getDeliveryDate = () =>
  `Delivery by 5 PM on ${new Date(
    Date.now() + 10 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })}`;

export const checkPincode = (pin) => {
  const regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
  return regex.test(pin);
};

export const setReviewsSort = (sortBy) => {
  const a = {
    helpful: "-likes,-rating,-createdAt",
    recent: "-createdAt,-rating",
    positive: "-rating,-createdAt",
    negative: "rating,-createdAt",
  };
  return a[sortBy];
};

export const setProductsListSort = (sortBy) => {
  const a = {
    relevance: "-createdAt,-price,-ratingsAverage",
    popularity: "-ratingsQuantity,-createdAt",
    "price--low-to-high": "price,-createdAt",
    "price--high-to-low": "-price,-createdAt",
    "newest-first": "-createdAt",
  };
  return a[sortBy];
};
