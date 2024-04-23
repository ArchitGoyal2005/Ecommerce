function ImageBox({ curr }) {
  const str = "c_scale,w_500/f_auto/q_auto";
  const a = curr.split("upload");
  const img = `${a[0]}upload/${str}${a[1]}`;
  return (
    <div className="bg-white w-10/12 ">
      <div className="h-full w-11/12">
        <img
          src={img}
          loading="lazy"
          alt="productName"
          decoding="async"
          className="object-contain  max-h-[500px] min-h-[450px] w-10/12 mix-blend-multiply border-8 border-white shadow-sm shadow-slate-400"
        />
      </div>
    </div>
  );
}

export default ImageBox;
