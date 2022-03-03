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
      {carouselList ? 
      <Carousel>
        <Carousel.Item>
        console.log("inside")
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500${carouselList[0].poster_path}`}
            alt="First slide"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      :
      <Loading/>
      }
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
