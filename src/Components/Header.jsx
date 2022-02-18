// import Search from "./Search";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className=" header  text-white p-1">
      <div>
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2>AMDB</h2>
        </NavLink>
        <h3>
          <FaSearch />
        </h3>
      </div>
    </header>
  );
}
