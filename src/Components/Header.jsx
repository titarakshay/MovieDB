// import Search from "./Search";
import { Button } from "bootstrap";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Header(handleClick) {
  return (
    <header className=" header  text-white p-1">
      <div>
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2>AMDB</h2>
        </NavLink>
        <div>
          <NavLink
            to={{
              pathname: `/popular`,
              state: {
                content: "movies",
              },
            }}
          >
            Movies
          </NavLink>
          <NavLink
            to={{
              pathname: `/popular`,
              state: {
                content: "shows",
              },
            }}
          >
            TV
          </NavLink>
        </div>

        <h3>
          <FaSearch />
        </h3>
      </div>
    </header>
  );
}
