import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import axios from "axios";

import "./Home.scss";
import { LOCAL_REQUEST } from "../../keys";

const alreadyLiked = JSON.parse(localStorage.getItem("ID"));

class Home extends Component {
  state = {
    seeMore: false,
    id: null,
    house: null,
    housesLiked: [],
    liked: []
  };

  onGetRequest = () => {
    const id = this.props.match.params.id;

    axios
      .get(`${LOCAL_REQUEST}/${id}`)
      .then(res => this.setState({ house: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    const theHousesLiked = JSON.parse(localStorage.getItem("ID"));
    // localStorage.clear();

    this.setState({ housesLiked: theHousesLiked });

    this.onGetRequest();
  };

  onSeeMore = () => this.setState({ seeMore: !this.state.seeMore });

  onMail = () => alert("Mail");
  onShare = () => alert("Share");

  onLike = e => {
    e.preventDefault();
    const { house, housesLiked } = this.state;
    let id = this.props.match.params.id;
    let likes = house.likes;
    let updatedLikes = likes + 1;

    axios
      .put(
        `${LOCAL_REQUEST}/${id}`,
        { likes: `${updatedLikes}` },
        { headers: { "Content-Type": "application/json" } }
      )

      .then(() =>
        this.setState(
          housesLiked === null || housesLiked === []
            ? { housesLiked: [id], liked: true }
            : { housesLiked: [...this.state.housesLiked, id], liked: true },
          this.onAddToLocalStorage,
          this.onGetRequest()
        )
      )
      .catch(err => console.log(err));
  };

  onAddToLocalStorage = () => {
    const { housesLiked } = this.state;
    localStorage.setItem("ID", JSON.stringify(housesLiked));
  };

  render() {
    const { seeMore, house, liked, housesLiked } = this.state;

    const alreadyLiked = JSON.parse(localStorage.getItem("ID"));

    console.log(house);

    return (
      <div
        className={"Home"}
        style={seeMore ? { overflowX: "auto" } : { overflowX: "hidden" }}
      >
        <Nav />

        {house !== null ? (
          <HomeHero
            more={seeMore}
            seeMore={this.onSeeMore}
            house={house !== null ? house : null}
          />
        ) : (
          <h1>Loading</h1>
        )}

        <HomeInfo
          more={seeMore}
          seeMore={this.onSeeMore}
          onMail={this.onMail}
          onShare={this.onShare}
          house={house !== null ? house : "Loading"}
          onLike={this.onLike}
          id={this.props.match.params.id}
          alreadyLiked={housesLiked}
        />
      </div>
    );
  }
}

export default Home;
