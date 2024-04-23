import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useUser } from "../Contexts/userContext";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const { user } = useUser();
  return (
    <nav className="flex h-16 p-2.5  items-center justify-evenly bg-indigo-950">
      <NavLink to="/">
        <h1 className="text-white font-semibold text-3xl  italic">
          E-Commerce
        </h1>
      </NavLink>
      <SearchBar />
      {user === null ? (
        <button className="bg-slate-50 md:text-xl text-lg p-1  w-1/12 h-3/4   text-indigo-950 shadow-gray-600 shadow-sm font-semibold rounded-sm hidden sm:block">
          <NavLink to="/login">Login</NavLink>
        </button>
      ) : (
        <button className="text-xl text-slate-50 font-semibold flex justify-evenly items-center gap-3 ">
          <VscAccount className="text-3xl" />
          <span>Account</span>
        </button>
      )}
      {user === null ? (
        <button className="text-xl text-slate-50 font-semibold hidden md:block">
          Become a Seller
        </button>
      ) : (
        <NavLink to="/cart">
          <button className="text-xl text-slate-50 font-semibold flex justify-evenly items-center gap-3 ">
            <AiOutlineShoppingCart className="text-3xl" />
            <span>Cart</span>
          </button>
        </NavLink>
      )}
    </nav>
  );
}

export default Header;
