import React from "react";
import "./Review.css";
import moment from "moment";

function Review({
  storeName,
  heading,
  text,
  userName,
  date,
  version,
  country,
  rating,
}) {
  const utcDate = moment(date, "MMM Do YY").fromNow();

  let isRating = "";
  if (rating == 5) {
    isRating = (
      <div>
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>
      </div>
    );
  } else if (rating == 4) {
    isRating = (
      <div>
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>
      </div>
    );
  } else if (rating == 3) {
    isRating = (
      <div>
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
      </div>
    );
  } else if (rating == 2) {
    isRating = (
      <div>
        <i class="fa fa-star text-warning"></i>{" "}
        <i class="fa fa-star text-warning"></i>{" "}
      </div>
    );
  } else {
    isRating = (
      <div>
        <i class="fa fa-star text-warning"></i>{" "}
      </div>
    );
  }
  return (
    <div>
      <div className="card mb-3 mt-3">
        <div className="card-top d-flex flex-row">
          <ul className="list-unstyled d-flex flex-row top">
            <li className="storeName"> {storeName}</li>
            <li>
              <b>{heading}</b>
            </li>
            <li>{isRating}</li>
          </ul>
        </div>
        <div className="card-middle m-3">
          <p>{text}</p>
        </div>
        <div className="card-bottom d-flex flex-row">
          <ul className="list-unstyled d-flex flex-row bottom">
            <li>by {userName}</li>
            <li>{utcDate}</li>
            <li>{version}</li>
            <li>{country}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Review;
