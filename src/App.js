import React, { Component } from "react";
import "./App.css";
import TopFilter from "./Components/TopFilter";
import SideBar from "./Components/SideBar";
import Reviews from "./Components/Reviews";
import { data } from "./review";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      reviews: [],
      searchValue: "",
      dropdownValue: "",
      filteredData: [],
      rating: "",
      country: "",
      appName: "Amazon",
      ratingsCount: [],
      dates: [],
      countries: ["India", "US", "UK"],
      countriesCount: [],
      versions: ["v1.1", "v1.2.1", "v0.1", "v1.0"],
      versionsCount: [],
    };
  }

  componentDidMount() {
    const result = data.sort(function (a, b) {
      return new Date(b.reviewDate) - new Date(a.reviewDate);
    });
    this.setState({ allData: result });

    const individualData = result.filter(
      (name) => name.appID.substr(4) == this.state.appName.toLowerCase()
    );
    this.setState({ reviews: individualData });
    this.getRatings(individualData);
    this.getCountriesCount(individualData);
    this.getVersionCount(individualData);
  }

  getApp = () => {
    return this.state.allData.filter(
      (name) => name.appID.substr(4) == this.state.appName.toLowerCase()
    );
  };

  getRatings = (individualData) => {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      const result = individualData.filter((name) => name.rating == i);
      let count = result.length;
      array.push(count);
    }
    this.setState({ ratingsCount: array });
  };

  getCountriesCount = (individualData) => {
    const { countries } = this.state;
    let array = [];
    for (let i = 0; i < countries.length; i++) {
      const country = individualData.filter(
        (name) => name.countryName == countries[i]
      );
      let count = country.length;
      array.push(count);
    }
    this.setState({ countriesCount: array });
  };

  getVersionCount = (individualData) => {
    const { versions } = this.state;
    let array = [];
    for (let i = 0; i < versions.length; i++) {
      const version = individualData.filter(
        (name) => name.version.toLowerCase() == versions[i].toLowerCase()
      );
      let count = version.length;
      array.push(count);
    }
    this.setState({ versionsCount: array });
  };

  handleDropdownInput = (e) => {
    this.setState({ appName: e.target.value });
    const result = this.state.allData.filter(
      (data) => data.appID.substr(4) == e.target.value.toLowerCase()
    );

    this.setState({ reviews: result });

    this.getRatings(result);
    this.getCountriesCount(result);
    this.getVersionCount(result);
  };

  handleSearchInput = (e) => {
    this.setState({ searchValue: e.target.value });
    const result = this.state.allData.filter(
      (data) => data.appID.substr(4) == e.target.value.toLowerCase()
    );
    this.setState({ reviews: result });

    this.getRatings(result);
    this.getCountriesCount(result);
    this.getVersionCount(result);
  };

  handleClick = (rating) => {
    const { reviews, dropdownValue, searchValue } = this.state;
    this.setState({ rating: rating });

    const result = this.getApp().filter((name) => name.rating == rating);
    this.setState({ reviews: result });
  };

  handleSort = (e) => {
    const { filteredData, dropdownValue, searchValue } = this.state;
    const value = e.target.value;

    if (value == "Oldest") {
      const result = this.state.reviews.sort(function (a, b) {
        return new Date(a.reviewDate) - new Date(b.reviewDate);
      });
      this.setState({ reviews: result });
    } else {
      const result = this.state.reviews.sort(function (a, b) {
        return new Date(b.reviewDate) - new Date(a.reviewDate);
      });
      this.setState({ reviews: result });
    }
  };

  filterByIndividualDate = (e) => {
    // 23 Oct 2020 13:06:02 is the date we get from json
    // 2020-11-09T09:46 date we are getting from select input

    const input = moment.utc(e.target.value).format("MMM Do YY");

    const result = this.getApp().filter(
      (name) => moment.utc(name.reviewDate).format("MMM Do YY") == input
    );
    this.setState({ reviews: result });
  };

  filterByCountry = (country) => {
    const { filteredData, dropdownValue, searchValue, reviews } = this.state;
    this.setState({ country: country });

    const result = this.getApp().filter((data) => data.countryName == country);
    this.setState({ reviews: result });
  };

  filterByVer = (version) => {
    //Calling the getApp function which return the current app name
    const result = this.getApp().filter(
      (name) => name.version.toLowerCase() == version.toLowerCase()
    );

    this.setState({ reviews: result });
  };

  render() {
    const {
      dropdownValue,
      searchValue,
      reviews,
      filteredData,
      rating,
      country,
    } = this.state;

    return (
      <div className="App">
        <TopFilter
          handleDropdownInput={this.handleDropdownInput}
          handleSort={this.handleSort}
        />
        <div className="app_body">
          <SideBar
            handleSearchInput={this.handleSearchInput}
            handleClick={this.handleClick}
            filterByIndividualDate={this.filterByIndividualDate}
            filterByCountry={this.filterByCountry}
            filterByVer={this.filterByVer}
            ratingsCount={this.state.ratingsCount}
            countriesCount={this.state.countriesCount}
            versionsCount={this.state.versionsCount}
          />
          <Reviews
            reviews={reviews}
            dropdownValue={dropdownValue}
            searchValue={searchValue}
            rating={rating}
            country={country}
          />
        </div>
      </div>
    );
  }
}

export default App;
