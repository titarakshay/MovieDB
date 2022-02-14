import Axios from "axios";
import  { useEffect, useState } from "react";
import { useParams,withRouter } from "react-router-dom";
import { API_KEY, BASEURL } from "../../utils/app";
import List from "./List";

import SingleContentDetails from "./SingleContentDetails";

export default function ContentDetails() {
  const [movieDetail, setMovieDetail] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [credits, setCredits] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const credits = await Axios.get(
          `${BASEURL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        setCredits(credit);

        
        const movie = movieList.data;
        setMovieList(movie);

        const movieDetail = await Axios.get(
          `${BASEURL}/movie/${id}?api_key=${API_KEY}`
        );
        const detail = movieDetail.data;
        setMovieDetail(detail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieData();
  }, [id]);

  return (
    <div className="container-xl p-top-7">
      <SingleContentDetails movieDetail={movieDetail} credits={credits} />
      <div>
        <h3 className="title-lg pt-5">Recommendations</h3>
        <List movieList={movieList.results} />
       
      </div>
    </div>
  );
}