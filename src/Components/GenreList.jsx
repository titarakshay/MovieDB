import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_KEY, BASEURL } from "../utils/app";

export default function GenreList(handleClick) {
  const [genreList, setGenreList] = useState([]);
  async function fetchData() {
    try {
      const genre = await axios.get(
        `${BASEURL}/genre/movie/list?api_key=${API_KEY}`
      );
      const { genres } = genre.data;
      setGenreList(genres);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="discover-list">
        <h3>Discover</h3>
        <p>
          <NavLink style={{ textDecoration: "none" }} to="/popular">
            Popular
          </NavLink>
        </p>
        <p>
          <NavLink style={{ textDecoration: "none" }} to="/now_playing">
            Now Playing
          </NavLink>
        </p>
        <p>
          <NavLink style={{ textDecoration: "none" }} to="/top_rated">
            Top Rated
          </NavLink>
        </p>
        <p>
          <NavLink style={{ textDecoration: "none" }} to="/upcoming">
            Upcoming
          </NavLink>
        </p>

        <h2>Genre</h2>
        {genreList.map((genre, i) => {
          return (
            <p>
              <NavLink
                key={i}
                activeClassName="active"
                to={`/movie/${genre.name}`}
                style={{ textDecoration: "none" }}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </NavLink>
            </p>
          );
        })}
      </div>
    </>
  );
}
