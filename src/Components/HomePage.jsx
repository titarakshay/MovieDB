
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_KEY, BASEURL } from "../utils/app";
import List from "./Contents/List";
import GenreList from "./GenreList";
import Landing from "./Landing";

export default function HomePage(handleClick,movieList) {
  console.log(movieList,"homepage");

  // const [movieList, setMovieList] = useState([]);
  // const {discover}  = useParams();
  // const [genresId, setGenresId]=useState(0)
  // useEffect(() => {
  //   if (genresId == true){
  //     console.log(genresId,"in gnere");
  //     axios
  //     .get(`${BASEURL}/discover/movie?api_key=${API_KEY}&with_genres=${genresId}&sort_by=popularity.desc`)
  //     .then((res) => setMovieList(res.data?.results));
  //   }else{
  //     axios
  //     .get(`${BASEURL}/movie/${discover?discover:"popular"}?api_key=${API_KEY}&language=en-US&page=1`)
  //     .then((res) => setMovieList(res.data?.results));
  //   }
  // }, [discover,genresId]);
  // const handleClick = (id) => {
  //   setGenresId(id);
  // };
 
  return (
    <>
      <div className="main-container">
        <div className="sub-container-1">

        <GenreList handleClick={handleClick}/>
        </div>
        <div className="sub-container-2">

       {/* <List movieList={movieList}/> */}
        </div>
   
      </div>
    </>
  );
}
