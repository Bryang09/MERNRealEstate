import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import "./Share.scss";

const Share = props => {
  const { img, onShare, share } = props;

  console.log(img);
  return (
    <section
      className="Share"
      style={share ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
    >
      <div className="shareModal">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="info">
          <h2>Share Our Beautiful Home</h2>
          <div className="shareContainer">
            <div className="share facebook">
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="text">
                <h5>Share On Facebook</h5>
              </span>
            </div>
            <div className="share twitter">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="text">
                <h5>Share On Twitter</h5>
              </span>
            </div>
            <div className="share instagram">
              <FontAwesomeIcon icon={faInstagram} />
              <span className="text">
                <h5>Share On Instagram</h5>
              </span>
            </div>
          </div>{" "}
          <h6 className="notNow" onClick={onShare}>
            Not Now
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Share;
