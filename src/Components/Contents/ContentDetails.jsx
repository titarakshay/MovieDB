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
  const { id } = useParams();

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const credits = await Axios.get(
          `${BASEURL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const credit = credits.data;
        setCredits(credit);

        const contentList = await Axios.get(
          `${BASEURL}/movie/${id}/recommendations?api_key=${API_KEY}&page=${1}`
        );
        const movie = contentList.data;
        setContentList(movie);

        const contentDetail = await Axios.get(
          `${BASEURL}/movie/${id}?api_key=${API_KEY}`
        );
        const detail = contentDetail.data;
        setContentDetail(detail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContentData();
  }, [id]);

  return (
    <div className="container-xl p-top-7">
      {contentDetail && (
        <>
          <SingleContentDetails
            contentDetail={contentDetail}
            credits={credits}
          />
          <div>
            <h3 className="title-lg pt-5">Recommendations</h3>
            <List contentList={contentList.results} />
          </div>
        </>
      )}
    </div>
  );
}
