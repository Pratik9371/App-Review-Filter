import React, { useState } from "react";
import "./SideBar.css";

function SideBar({
  searchInput,
  handleSearchInput,
  filteredData,
  filteredRating,
  filterRatings,
  filterByIndividualDate,
  filterByCountry,
  filterByVer,
  ratingsCount,
  countriesCount,
  versionsCount,
  rating,
  version,
  versions,
  country,
  countries,
}) {
  return (
    <div className="sidebar p-3 ">
      <div className="search-div">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search"
          onChange={handleSearchInput}
        ></input>
        <br />
        <input
          type="datetime-local"
          className="form-control form-control-sm"
          onChange={filterByIndividualDate}
        ></input>
      </div>

      <div className="filterByRating mt-4">
        <h6>Filter by rating</h6>
        <ul className="list-unstyled">
          <li onClick={() => filterRatings(5)}>
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span className={rating == 5 ? "font-weight-bold" : null}>
              {ratingsCount[4]}
            </span>
          </li>
          <li onClick={() => filterRatings(4)} className="">
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span className={rating == 4 ? "font-weight-bold" : null}>
              {ratingsCount[3]}
            </span>
          </li>
          <li onClick={() => filterRatings(3)} className="">
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span className={rating == 3 ? "font-weight-bold" : null}>
              {ratingsCount[2]}
            </span>
          </li>
          <li onClick={() => filterRatings(2)} className="">
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span className={rating == 2 ? "font-weight-bold" : null}>
              {ratingsCount[1]}
            </span>
          </li>
          <li onClick={() => filterRatings(1)} className="">
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
            </div>
            <span className={rating == 1 ? "font-weight-bold" : null}>
              {ratingsCount[0]}
            </span>
          </li>
        </ul>
      </div>

      <div className="filterByVersion mt-3">
        <h6>Filter by version</h6>
        <ul className="list-unstyled">
          <li onClick={() => filterByVer(versions[0])}>
            <div className="versions">
              <div>{versions[0]}</div>
              <div
                className={version == versions[0] ? "font-weight-bold" : null}
              >
                {versionsCount[0]}
              </div>
            </div>
          </li>
          <li onClick={() => filterByVer(versions[1])}>
            <div className="versions">
              <div>{versions[1]}</div>
              <div
                className={version == versions[1] ? "font-weight-bold" : null}
              >
                {versionsCount[1]}
              </div>
            </div>
          </li>
          <li onClick={() => filterByVer(versions[2])}>
            <div className="versions">
              <div>{versions[2]}</div>
              <div
                className={version == versions[2] ? "font-weight-bold" : null}
              >
                {versionsCount[2]}
              </div>
            </div>
          </li>
          <li onClick={() => filterByVer(versions[3])}>
            <div className="versions">
              <div>{versions[3]}</div>
              <div
                className={version == versions[3] ? "font-weight-bold" : null}
              >
                {versionsCount[3]}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="filterByCountry mt-3">
        <h6>Filter by Country</h6>
        <ul className="list-unstyled">
          <li onClick={() => filterByCountry(countries[0])}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/555/555462.svg"
                  width="25"
                ></img>{" "}
                {countries[0]}
              </div>
              <div
                className={country == countries[0] ? "font-weight-bold" : null}
              >
                {countriesCount[0]}
              </div>
            </div>
          </li>
          <li onClick={() => filterByCountry(countries[1])}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/206/206626.svg"
                  width="25"
                ></img>{" "}
                {countries[1]}
              </div>{" "}
              <div
                className={country == countries[1] ? "font-weight-bold" : null}
              >
                {countriesCount[1]}
              </div>
            </div>
          </li>
          <li onClick={() => filterByCountry(countries[2])}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/555/555417.svg"
                  width="25"
                ></img>{" "}
                {countries[2]}
              </div>
              <div
                className={country == countries[2] ? "font-weight-bold" : null}
              >
                {countriesCount[2]}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
