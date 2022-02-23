import React from "react";
import { URL_YOUTUBE } from "../../utils/app";

export default function TrailerList({ trailer }) {
  return (
    <div>
      {/* <iframe
        title={`${URL_YOUTUBE} trailer`}
        src={`${URL_YOUTUBE} trailer`}
        frameBorder="0"
        allowFullScreen
      /> */}
      <iframe width="200" height="120" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}