import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <form className="w-1/3 flex  shadow-gray-600 shadow-sm">
      <input
        type="text"
        className="bg-slate-50 w-full rounded-l-sm pl-4 placeholder:text-lg placeholder:text-gray-600 
         outline-none"
        placeholder="Search for products,brands and more"
      />
      <button className="bg-slate-50 text-indigo-950 text-3xl px-2 pb-1.5 rounded-r-sm ">
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchBar;
