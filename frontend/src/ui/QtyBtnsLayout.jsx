function QtyBtnsLayout({
  handleDecrease,
  handleIncrease,
  isLoading = false,
  qty,
}) {
  return (
    <div className="flex justify-start gap-8 items-center text-xl font-semibold">
      <button
        className="border-2 p-1 h-10 w-10 rounded-full"
        onClick={handleDecrease}
        disabled={isLoading}
      >
        -
      </button>
      <span className="">{qty}</span>
      <button
        className="border-2 p-1 h-10 w-10 rounded-full"
        onClick={handleIncrease}
        disabled={isLoading}
      >
        +
      </button>
    </div>
  );
}

export default QtyBtnsLayout;
