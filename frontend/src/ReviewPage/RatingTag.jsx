import { FaStar } from "react-icons/fa";
import VioletTag from "../ui/VioletTag";

function RatingTag({ children, size }) {
  return (
    <VioletTag>
      <span className={`text-${size === "small" ? "md" : "lg"} text-gray-50`}>
        {children}
      </span>
      <FaStar
        className={`text-${size === "small" ? "sm" : "md"} text-gray-50`}
      />
    </VioletTag>
  );
}

export default RatingTag;
