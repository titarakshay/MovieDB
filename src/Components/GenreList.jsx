import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_KEY, BASEURL } from "../utils/app";

export default function GenreList() {
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
    
      fetchData()
  },[]);
  return(
      <>
      <div>
        {/* <nav>

                  <NavLink style={{ textDecoration: "none", color: "black" }} to="/popular">
                      Popular
                      </NavLink>
                      
              <NavLink style={{ textDecoration: "none", color: "black" }} to="/discover">
                  Discover
                  </NavLink>
              <NavLink style={{ textDecoration: "none", color: "black" }} to="/toprated">
                  Top Rated
                  </NavLink>
              <NavLink style={{ textDecoration: "none", color: "black" }} to="/upcomin">
                  Upcoming
                  </NavLink>
        </nav> */}
         
          <h2>Genre</h2>
          {genreList.map((genre, i) => {
            return (
                <>
              <NavLink
                key={i}
                activeClassName="active"
                style={{ textDecoration: "none" }}
                to={`/genre/${genre.name}`}
                // onClick={() => handleClick(genre.id)}
                >
                {genre.name}
              </NavLink>
                  </>
            );
          })}
      </div>
      </>
  )
}
