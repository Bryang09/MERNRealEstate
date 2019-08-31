import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Gallery = props => {
  const { info, houses } = props;

  const results = info.map((res, i) => {
    return (
      <div className="imgContainer" key={i}>
        <div
          className="img"
          style={{
            backgroundImage: `url(${res.img[0]})`
          }}
        >
          <Link to={`/home/${res._id}`}>
            <div className="info">
              <div className="infoContainer">
                <div className="information">
                  <h3>${res.price}</h3>
                </div>
                <div className="information">
                  <h3>{res.size} sq.ft</h3>
                </div>
                <div className="information">
                  <h3>
                    <FontAwesomeIcon icon={faHeart} /> {""}
                    {res.likes}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return results;
};

export default Gallery;
