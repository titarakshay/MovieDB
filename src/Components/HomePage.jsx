
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_KEY, BASEURL } from "../utils/app";
import List from "./Contents/List";
import GenreList from "./GenreList";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const { discover } = useParams();
  useEffect(() => {
    axios
      .get(`${BASEURL}/movie/${discover?discover:"popular"}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setMovieList(res.data?.results));
  }, [discover]);
  return (
    <>
      <div className="main-container">
        <div className="sub-container-1">

        <GenreList/>
        </div>
        <div className="sub-container-2">

       <List movieList={movieList}/>
        </div>
   
      </div>
    </>
  );
}
