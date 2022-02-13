import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Stars from "react-rating";

const Rating = (props) => {

    console.log(props,"props");
  return (
    <div>
      <Stars
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        initialRating={props.number}
        readonly
      />
    </div>
  );
};

export default Rating;