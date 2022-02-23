import Axios from "axios";
import  { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams, NavLink } from "react-router-dom";
import { API_KEY, BASEURL } from "../utils/app";

export default function Cast() {
  const [casts, setCasts] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const credits = await Axios.get(
          `${BASEURL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        setCasts(credit);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchCastData();
  }, [id]);

  return (
    <div className="p-5">
      <h2 className="title-lg">Cast and Crew</h2>
      <div className="d-flex justify-content-between media-d-b cast-crew-container">
        <div className="castCrow">
          <p>Cast {casts && casts.cast.length}</p>
          {casts ? (
            casts.cast.map((cast, i) => {
              return (
                <NavLink
                  to={`/person/${cast.id}`}
                  key={i}
                  className="d-flex align-items-center cast-profile mb-3"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <div className="pl-2">
                    <h3 className="cast-name">{cast.name}</h3>
                    <p className="text-secondary">{cast.character}</p>
                  </div>
                </NavLink>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
        <div className="castCrow">
          <p>Crew {casts && casts.crew.length}</p>
          {casts ? (
            casts.crew.map((crew, i) => {
              return (
                <div
                  className="d-flex align-items-center cast-profile mb-3"
                  key={i}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${crew.profile_path}`}
                    alt={crew.name}
                  />
                  <div>
                    <h3>{crew.name}</h3>
                    <p>{crew.department}</p>
                  </div>

                  <p></p>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}