// import Search from "./Search";
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header d-flex justify-content-between text-white p-1">
      <div className="container-x1 ">
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>AMDB</h1>
          </NavLink>
      </div>
      <div>
      <h3><FaSearch/></h3>
    </div>
    </header>
  );
}