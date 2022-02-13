import { NavLink } from "react-router-dom";
// import Search from "./Search";

export default function Header() {
  return (
    <header className="header ">
      <div className="container-xl text-white">
        <nav>
          {/* <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          </NavLink> */}
          <h1>MovieDB</h1>
        </nav>
      </div>
    </header>
  );
}