import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASEURL } from "../../utils/app";
import List from "./List";

import SingleContentDetails from "./SingleContentDetails";

export default function ContentDetails() {
  const [contentDetail, setContentDetail] = useState("");
  const [contentList, setContentList] = useState([]);
  const [credits, setCredits] = useState("");
  const  {name } = useParams();
  console.log(name,"ids");
  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const credits = await Axios.get(
          `${BASEURL}/movie/${name}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        setCredits(credit);

        const contentList = await Axios.get(
          `${BASEURL}/movie/${name}/recommendations?api_key=${API_KEY}&page=${1}`
        );
        const movie = contentList.data;
        setContentList(movie?.results);

        const contentDetail = await Axios.get(
          `${BASEURL}/movie/${name}?api_key=${API_KEY}`
        );
        const detail = contentDetail.data;
        setContentDetail(detail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContentData();
  }, [name]);
  return (
   <>
      {contentDetail && (
        <>
          <SingleContentDetails
            contentDetail={contentDetail}
            credits={credits}
          />
          <div>
            <h3 className="title-lg pt-5">Recommendations</h3>
            <List movieList={contentList} />
          </div>
        </>
      )}
   </>

  );
}
