import React from "react";
import "./TopFilter.css";

function TopFilter({
  data,
  setDropdownInput,
  reviews,
  setFilteredData,
  filteredData,
  setReviews,
  handleDropdownInput,
  handleSort,
}) {
  return (
    <div className="container-fluid bg-light top-filter">
      <div className="row p-2">
        <div className="col-6">
          <div className="d-flex flex-column selectProducts">
            <h6 className="text-left">Select Products</h6>
            <select
              className="form-control form-control-sm"
              onChange={handleDropdownInput}
            >
              <option>Amazon</option>
              <option>Google</option>
              <option>Flipkart</option>
              <option>Myntra</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <h6 className="text-left">Sorting</h6>
          <select
            className="form-control form-control-sm"
            onChange={handleSort}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopFilter;
