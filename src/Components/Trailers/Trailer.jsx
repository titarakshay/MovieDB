import React from "react";
import { Col } from "react-bootstrap";
import TrailerList from "./TrailerList";

export default function Trailer({ trailers }) {

  let trailer = trailers.map(function (trailer) {
    return (
      <Col xs={5} sm={3} md={2} key={trailer.id}>
        <TrailerList trailer={trailer.key} />
      </Col>
    );
  });

  if (trailer.length !== 0) {
    return (
      <div className="pt-3">
        <h1>Trailers</h1>
        <div>{trailer}</div>
      </div>
    );
  } else {
    return null;
  }
}