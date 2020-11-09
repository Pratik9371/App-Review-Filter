import React, { useState } from "react";
import "./Review.css";
import Review from "./Review";
import moment from "moment";

function Reviews({
  reviews,
  filteredData,
  searchValue,
  dropdownValue,
  rating,
  country,
}) {
  return (
    <div className="review ">
      {reviews.map((data, id) => (
        <Review
          key={id}
          storeName={data.appStoreName}
          heading={data.reviewHeading}
          text={data.reviewText}
          userName={data.reviewUserName}
          date={moment.utc(data.reviewDate).format("MMM Do YY")}
          version={data.version}
          country={data.countryName}
          rating={data.rating}
        />
      ))}
    </div>
  );
}

export default Reviews;
