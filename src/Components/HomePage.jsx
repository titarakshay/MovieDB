import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-bootstrap";
import Rating from "react-rating";
import { API_KEY,BASEURL } from "../utils/app"

import Loader from "./Loader";



export default function HomePage () {
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
        axios.get(`${BASEURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => setMovieList(res.data?.results))
    },[])
   
    return (
        <>
        <div className="d-flex  movie-list-container container-xl">
          {movieList ? (
            movieList.map((movie, i) => {
              let { poster_path, title, vote_average, id } = movie;
              return (
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to={`/movie/${id}`}
                  key={i}
                  className="m-4 single-movie text-center shadow"
                >
                  <img
                    className="movie-poser"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt=""
                  />
    
                  <p className="py-2 font-sm">{title}</p>
                  <div className="pb-2">
                    <Rating number={vote_average / 2} />
                  </div>
                </NavLink>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
        </>
      );
}