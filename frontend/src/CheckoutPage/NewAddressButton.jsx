import { FiPlus } from "react-icons/fi";

function NewAddressButton() {
  return (
    <button className="flex justify-start items-center w-full  gap-4 font-semibold p-4  text-indigo-800 text-lg">
      <FiPlus />
      <span>Add a new Address</span>
    </button>
  );
}

export default NewAddressButton;
