function OrderOptionBox({ label, children }) {
  return (
    <div className="flex flex-col divide-y-4 divide-white">
      <div className="p-4 w-full bg-indigo-900 text-white font-bold text-xl">
        {label}
      </div>
      {children}
    </div>
  );
}

export default OrderOptionBox;
