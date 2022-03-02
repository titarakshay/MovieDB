
import axios from "axios";
import { useEffect, useState } from "react";
import {  useLocation, useParams } from "react-router";
import { API_KEY, BASEURL } from "../utils/app";
import List from "./Contents/List";
import Pagination from "./Pagination";
// import GenreList from "./GenreList";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const {discover}  = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
   async function fetching (){
     try {
       const fetch=await  axios
       .get(`${BASEURL}/movie/${discover?discover:"popular"}?api_key=${API_KEY}&language=en-US&page=${page}`)
       const fetchData=fetch.data
       setMovieList(fetchData)
      } catch (error) {
        console.log(error);
      }
    }
   fetching()
   document.title = `aMoviedb |   ${discover.toUpperCase()}`;
  }, [discover,page]);
  return (
    <>
        <List movieList={movieList.results}/>
        <Pagination
        nextPreviousPage={movieList}
        setPage={setPage}
        page={page}
      />
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
