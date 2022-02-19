
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { API_KEY, BASEURL } from "../utils/app";
import List from "./Contents/List";
// import GenreList from "./GenreList";

export default function HomePage() {
  let location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const {discover}  = useParams();
  useEffect(() => {
   async function fetching (){
     try {
       const fetch=await  axios
       .get(`${BASEURL}/movie/${discover?discover:"popular"}?api_key=${API_KEY}&language=en-US&page=1`)
       const fetchData=fetch.data
       setMovieList(fetchData?.results)
      } catch (error) {
        console.log(error);
      }
    }
   fetching()
    
  }, [discover]);
  return (
    <>
        <List movieList={movieList}/>
      {/* <div className="main-container">
        <div className="sub-container-1">

        <GenreList />
        </div>
        <div className="sub-container-2">
        <List movieList={movieList}/>

        </div>
   
      </div> */}
    </>
  );
}
