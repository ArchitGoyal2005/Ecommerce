function DeliveryAddress({ id, selected, setSelected, setAddSelected }) {
  const isSelected = selected === id;
  const address = "House Number 1356, Sector 8, Faridabad, Haryana - 121006";
  return (
    <div
      className={`p-6 flex justify-between items-start ${
        isSelected && "bg-slate-200"
      } flex-wrap`}
    >
      <div className="flex justify-start gap-6 items-center">
        <input
          type="radio"
          id={id}
          checked={isSelected}
          onChange={(e) => setSelected(parseInt(e.target.id))}
        />
        <label htmlFor="" className="text-lg font-semibold">
          {address}
        </label>
      </div>
      {isSelected && (
        <button className="text-lg text-indigo-600 font-semibold uppercase">
          Edit
        </button>
      )}
      {isSelected && (
        <div className="w-full p-6">
          <button
            className="text-lg font-semibold bg-indigo-900 text-white p-3 rounded-sm"
            onClick={() => setAddSelected(address)}
          >
            Deliver Here
          </button>
        </div>
      )}
    </div>
  );
}

export default DeliveryAddress;
