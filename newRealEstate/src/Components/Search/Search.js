import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Main from "./Main/Main";

import "./Search.scss";
import { LOCAL_REQUEST } from "../../keys";

class Search extends Component {
  state = {
    houses: [],
    zip: null,
    sort: "normal"
  };

  componentDidMount = () => {
    const zip = this.props.match.params.zip;

    this.setState(
      !isNaN(zip) && zip.length >= 5
        ? this.setState({ zip })
        : this.setState({ zip: false })
    );

    axios
      .get(LOCAL_REQUEST)
      .then(res => this.setState({ houses: res.data }))
      .catch(err => console.log(err));
  };

  onLowToHigh = () => this.setState({ sort: "low" });
  onHighToLow = () => this.setState({ sort: "high" });
  onSmallToLarge = () => this.setState({ sort: "small" });
  onLargeToSmall = () => this.setState({ sort: "large" });

  render() {
    const { houses, zip, sort } = this.state;

    const info =
      sort === "normal"
        ? houses
        : sort === "low"
        ? houses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        : sort === "high"
        ? houses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        : sort === "small"
        ? houses.sort((a, b) => parseFloat(a.size) - parseFloat(b.size))
        : sort === "large"
        ? houses.sort((a, b) => parseFloat(b.size) - parseFloat(a.size))
        : null;

    return (
      <div className="Search">
        {zip === false ? (
          <>
            <h1>Something Went Wrong</h1>
            <Link to="/">Return</Link>{" "}
          </>
        ) : (
          <Main
            houses={houses}
            info={info}
            low={this.onLowToHigh}
            high={this.onHighToLow}
            small={this.onSmallToLarge}
            large={this.onLargeToSmall}
          />
        )}
      </div>
    );
  }
}

export default Search;
