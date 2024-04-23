import { Link } from "react-router-dom";
import MainDetails from "../ProductPage/MainDetails";

function ProductListItem({ prod, padding = true }) {
  return (
    <Link
      to={`/product/${prod.id}`}
      target="_blank"
      className={`w-full ${padding && "p-12"} flex justify-evenly`}
    >
      <div className="h-auto w-1/4">
        <img
          src={prod.images[0]}
          alt={prod.name}
          className="object-contain min-h-full w-full mix-blend-multiply "
        />
      </div>
      <div>
        <MainDetails prod={prod} size="small" />
      </div>
    </Link>
  );
}

export default ProductListItem;
