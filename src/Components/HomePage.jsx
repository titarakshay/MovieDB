import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { API_KEY, BASEURL } from "../utils/app";
import List from "./Contents/List";
import Loading from "./Loading";
import Pagination from "./Pagination";
// import GenreList from "./GenreList";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const { discover } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetching() {
      try {
        const fetch = await axios.get(
          `${BASEURL}/movie/${
            discover ? discover : "popular"
          }?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        const fetchData = fetch.data;
        setMovieList(fetchData);
        const fetch2= await axios.get(
          `${BASEURL}/tv/${
            discover ? discover : "popular"
          }?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        const fetchData2 = fetch2.data;
        console.log(fetchData2,"here");
      } catch (error) {
        console.log(error);
      }
    }
    fetching();
    document.title = `aMoviedb |   ${discover.toUpperCase()}`;
  }, [discover, page]);
 let carouselList =movieList
  console.log(carouselList,"list");
  return (
    <>
      
      <List movieList={movieList.results} />
      <Pagination nextPreviousPage={movieList} setPage={setPage} page={page} />
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
