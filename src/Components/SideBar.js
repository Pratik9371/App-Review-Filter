import React, { useState } from "react";
import "./SideBar.css";

function SideBar({
  searchInput,
  handleSearchInput,
  filteredData,
  filteredRating,
  handleClick,
  filterByIndividualDate,
  filterByCountry,
  filterByVer,
  ratingsCount,
  countriesCount,
  versionsCount,
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
          <li
            onClick={() => handleClick(5)}
            className="d-flex justify-content-between"
          >
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span>{ratingsCount[4]}</span>
          </li>
          <li
            onClick={() => handleClick(4)}
            className="d-flex justify-content-between"
          >
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span>{ratingsCount[3]}</span>
          </li>
          <li
            onClick={() => handleClick(3)}
            className="d-flex justify-content-between"
          >
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span>{ratingsCount[2]}</span>
          </li>
          <li
            onClick={() => handleClick(2)}
            className="d-flex justify-content-between"
          >
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
              <i class="fa fa-star text-warning"></i>
            </div>
            <span>{ratingsCount[1]}</span>
          </li>
          <li
            onClick={() => handleClick(1)}
            className="d-flex justify-content-between"
          >
            <div>
              <i class="fa fa-star text-warning"></i>{" "}
            </div>
            <span>{ratingsCount[0]}</span>
          </li>
        </ul>
      </div>

      <div className="filterByVersion mt-3">
        <h6>Filter by version</h6>
        <ul className="list-unstyled">
          <li onClick={() => filterByVer("v1.1")}>
            <div className="versions">
              <div>v1.1</div>
              <div>{versionsCount[0]}</div>
            </div>
          </li>
          <li onClick={() => filterByVer("v1.2.1")}>
            <div className="versions">
              <div>v1.2.1</div>
              <div>{versionsCount[1]}</div>
            </div>
          </li>
          <li onClick={() => filterByVer("v0.1")}>
            <div className="versions">
              <div>v0.1</div>
              <div>{versionsCount[2]}</div>
            </div>
          </li>
          <li onClick={() => filterByVer("v1.0")}>
            <div className="versions">
              <div>v1.0</div>
              <div>{versionsCount[3]}</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="filterByCountry mt-3">
        <h6>Filter by Country</h6>
        <ul className="list-unstyled">
          <li onClick={() => filterByCountry("India")}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/555/555462.svg"
                  width="25"
                ></img>{" "}
                India
              </div>
              <div>{countriesCount[0]}</div>
            </div>
          </li>
          <li onClick={() => filterByCountry("US")}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/206/206626.svg"
                  width="25"
                ></img>{" "}
                United States
              </div>{" "}
              <div> {countriesCount[1]}</div>
            </div>
          </li>
          <li onClick={() => filterByCountry("UK")}>
            <div className="countries">
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/555/555417.svg"
                  width="25"
                ></img>{" "}
                United Kingdom
              </div>
              <div> {countriesCount[2]}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
