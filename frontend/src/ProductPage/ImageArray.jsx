function ImageArray({ curr, setCurr, data }) {
  // Import images dynamically

  const images = data;

  return (
    <ul className="flex flex-col md:w-2/12 sm:w-1/8 w-1/4">
      {images.slice(0, 7).map((image, index) => (
        <li key={index} className="m-1" onMouseEnter={() => setCurr(index)}>
          <img
            src={image}
            alt={`00${index + 1}`}
            loading="lazy"
            decoding="async"
            className={`w-full h-16 p-0.5 object-contain mix-blend-multiply ${
              index === curr
                ? "border-2 border-indigo-800"
                : "border border-white"
            } outline-none  cursor-pointer shadow-sm shadow-slate-400 `}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageArray;
