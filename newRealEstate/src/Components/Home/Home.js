import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import axios from "axios";

import "./Home.scss";
import { LOCAL_REQUEST } from "../../keys";
import Share from "./Info/ShareModal/Share";
import Mail from "./Info/MailModal/Mail";

class Home extends Component {
  state = {
    seeMore: false,
    id: null,
    house: null,
    housesLiked: [],
    share: false,
    mail: false
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
  onShare = () => this.setState({ share: !this.state.share });
  onMail = () => this.setState({ mail: !this.state.mail });

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
            ? { housesLiked: [id] }
            : { housesLiked: [...this.state.housesLiked, id] },
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
    const { seeMore, house, share, housesLiked, mail } = this.state;

    console.log(share);

    return (
      <div
        className={"Home"}
        style={seeMore ? { overflowX: "auto" } : { overflowX: "hidden" }}
      >
        <Nav />

        {house !== null ? (
          <>
            <HomeHero
              more={seeMore}
              seeMore={this.onSeeMore}
              house={house !== null ? house : null}
              share={share}
            />
            <Share
              img={house !== null ? house.img[0] : null}
              share={share}
              onShare={this.onShare}
            />
            <Mail
              img={house !== null ? house.img[1] : null}
              mail={mail}
              onMail={this.onMail}
              name={house !== null ? house.name : null}
            />
          </>
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
          share={share}
        />
      </div>
    );
  }
}

export default Home;
