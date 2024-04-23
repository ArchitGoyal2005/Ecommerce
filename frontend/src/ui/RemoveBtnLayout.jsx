function RemoveBtnLayout({ setRemove, isPending = false, handleClick }) {
  return (
    <div className="flex pt-1 pl-8 pb-8 gap-8 text-lg font-semibold">
      <label className="">Do you want to remove this item?</label>
      <button onClick={handleClick} disabled={isPending}>
        &#10003;
      </button>
      <button onClick={() => setRemove(false)}>&#10008;</button>
    </div>
  );
}

export default RemoveBtnLayout;
