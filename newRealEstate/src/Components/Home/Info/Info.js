import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Buttons from "./Buttons";

import "./Info.scss";

const HomeInfo = props => {
  const {
    seeMore,
    more,
    onMail,
    onShare,
    house,
    onLike,
    id,
    alreadyLiked
  } = props;

  const isLiked = <FontAwesomeIcon icon={faHeart} color={"red"} />;

  const notLiked = (
    <FontAwesomeIcon
      icon={faHeart}
      color={"#333"}
      onClick={onLike}
      style={{ cursor: "pointer" }}
    />
  );

  const filter =
    alreadyLiked !== null ? alreadyLiked.filter(res => res === id) : null;
  console.log(filter == id);
  console.log(filter);
  console.log(alreadyLiked);
  return (
    <div className={more ? "homeInfo none" : "homeInfo"}>
      <div
        className="container"
        style={more ? { color: "#fff" } : { color: "" }}
      >
        <div className="name">
          <h2>{house.name} </h2>
          <h4>
            <span style={{ marginRight: "3vw" }}>
              {alreadyLiked !== null
                ? filter == id
                  ? isLiked
                  : notLiked
                : notLiked}

              {house.likes}
            </span>
            {house.size} sqft
          </h4>
        </div>

        <div className="hardInfo">
          <div className="rooms section">
            <h4 className="label">Rooms</h4>
            <h4 className="value">{house.rooms}</h4>
          </div>
          <div className="bathRooms section">
            <h4 className="label">Bathrooms</h4>
            <h4 className="value">{house.restRooms}</h4>
          </div>
        </div>

        <div className="location section">
          <h4 className="label">Location</h4>
          <h4 className="value">Los Angeles, California</h4>
        </div>

        <div className="year section">
          <h4 className="label">Year Built</h4>
          <h4 className="value">{house.yearBuilt}</h4>
        </div>

        <div className="price section">
          <h4 className="label">Price</h4>
          <h4 className="value">$ {house.price}</h4>
        </div>

        <Buttons onMail={onMail} onShare={onShare} seeMore={seeMore} />
      </div>
    </div>
  );
};

export default HomeInfo;
