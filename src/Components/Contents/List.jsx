import Stars from "react-rating";

import { FaRegStar, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";

export default function List({movieList=[]}) {
  console.log(movieList,"movies");
  return (
    <>
      {movieList ? (
        movieList.map((movie, i) => {
          let { poster_path, title, vote_average, id } = movie;
          return (
            <div className="">
              <NavLink
                style={{ textDecoration: "none", color: "#000" }}
                to={`/movie/${id}`}
                key={id}
                className="m-4 single-movie text-center shadow"
              >
                <img
                  className="movie-poser"
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt=""
                />

                <p className="py-2 font-sm">{title}</p>
                <div className="pb-2">
                  <Stars
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    initialRating={vote_average / 2}
                    readonly
                  />
                </div>
              </NavLink>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
}
