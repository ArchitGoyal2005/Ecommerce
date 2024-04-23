import { useState } from "react";
import ImageArray from "./ImageArray";
import ImageBox from "./ImageBox";
import OrderButtons from "./OrderButtons";

function ProductImage({ data }) {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="my-12 ml-14">
      <div className="flex gap-2 justify-end">
        <ImageArray curr={currImg} setCurr={setCurrImg} data={data} />
        <ImageBox curr={data[currImg]} />
      </div>
      <OrderButtons />
    </div>
  );
}

export default ProductImage;
