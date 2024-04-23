import MainDetails from "./MainDetails";
import OtherDetails from "./OtherDetails";
import RatingsAndReviews from "./RatingsAndReviews";

function ProductContent({ data }) {
  return (
    <main className="">
      <MainDetails prod={data} />
      <OtherDetails prod={data} />
      <RatingsAndReviews prod={data} />
    </main>
  );
}

export default ProductContent;
