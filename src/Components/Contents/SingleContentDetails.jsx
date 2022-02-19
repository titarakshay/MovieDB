import Axios from "axios";
import  { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_KEY, BASEURL } from "../../utils/app";
import Loading from "../Loading";

// import Rating from "../Rating";
// import Trailer from "../trailar/Trailer";

export default function SingleContentDetails({ contentDetail, credits }) {
  const [trailer, setTrailer] = useState("");
  const  {name}  = useParams();

  useEffect(() => {
    document.title = `Movie | ${contentDetail?.title}`;
  });

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const trailers = await Axios.get(
          `${BASEURL}/movie/${name}/videos?api_key=${API_KEY}`
        );
        const trailerData = trailers.data;
        setTrailer(trailerData);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchCastData();
  }, [name]);
  console.log(contentDetail,"details");
  return (
    <>
      {contentDetail ? (
        <div className="d-flex align-items-center media-d-b">
          <div className="single-movie-poster">
            <img
              className="movie-poser"
              src={`https://image.tmdb.org/t/p/w500${contentDetail.poster_path}`}
              alt=""
            />
          </div>

          <div className="pl-5 media-p-1">
            <p className="title-lg">{contentDetail.title}</p>
            <div className="text-secondary">
              <small className="pr-1">{contentDetail.release_date}</small>

              {contentDetail.production_countries.map((countries, i) => (
                <small className="pr-4" key={i}>
                  ({countries.iso_3166_1})
                </small>
              ))}

              {contentDetail.genres.map((genre, i) => (
                <small className="pr-2" key={i}>
                  •{genre.name}
                </small>
              ))}
              <small className="pl-4">
                {Math.floor(contentDetail.runtime / 60) +
                  "h" +
                  (contentDetail.runtime % 60) +
                  "m"}
              </small>
            </div>
            <div className="d-flex align-items-center py-3">
              {/* <Rating number={contentDetail.vote_average / 2} /> */}
              <span className="pl-3">{contentDetail.vote_average / 2}</span>
            </div>
            <h3 className="movie-tagline text-secondary">
              {contentDetail.tagline}
            </h3>
            {/* <Trailer trailers={trailer.results.slice(0, 1)} /> */}
            <h2 style={{ fontSize: "1.5rem" }}>overview</h2>
            <p>{contentDetail.overview}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <div className="d-flex pt-5">
        <div>
          <h3 className="title-lg">Top Billed Cast</h3>
          <div className="d-flex cast-container">
            {credits
              ? credits.cast.map((cast, i) => {
                  return (
                    <div
                      key={i}
                      className="profile-card shadow-sm mx-2 my-1 border rounded"
                    >
                      <NavLink
                        to={`/person/${cast.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="profile-img ">
                          <img
                            className="rounded"
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name}
                          />
                        </div>
                        <div className="p-2">
                          <h3 className="cast-name">{cast.name}</h3>
                          <p className="text-secondary">{cast.character}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="mt-4 ml-2 ">
            <NavLink
              to={`/movie/${contentDetail?.id}/cast`}
              style={{
                textDecoration: "none",
                color: "#100",
                fontSize: "1.25rem",
              }}
            >
              👉🏻 Full Cast & Crew
            </NavLink>
          </div>
        </div>
        <div className="pl-5 pt-3">
          <div className="pb-3">
            <h3 className="cast-name">Status</h3>
            <p className="text-secondary">{contentDetail?.status}</p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Original Language</h3>
            <p className="text-secondary">{contentDetail?.original_language}</p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Budget</h3>
            <p className="text-secondary">
              {contentDetail?.budget > 0 ? contentDetail?.budget : "-"}
            </p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Revenue </h3>
            <p className="text-secondary">
              {contentDetail?.revenue > 0 ? contentDetail?.revenue : "-"}
            </p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name"> Keywords</h3>
            <p className="text-secondary">{contentDetail?.status}</p>
          </div>
        </div>
      </div>
    </>
  );
}
