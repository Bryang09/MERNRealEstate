import React from "react";

import { Link } from "react-router-dom";

import "./Info.scss";

const Info = props => {
  const { search, zip, onZip } = props;
  return (
    <div
      className="info"
      style={!search ? { display: "flex" } : { display: "none" }}
    >
      <h2>
        Welcome to <span>Finder</span>{" "}
      </h2>

      <div className="pageDesc">
        <h3>We don't help you buy a house,</h3>
        <h3>
          We help you buy a <span>Home</span>{" "}
        </h3>
      </div>

      <input
        type="number"
        value={zip}
        placeholder="Type Zip Code"
        onChange={onZip}
        style={
          zip === null || zip.length === 0
            ? { border: "2px solid #4ddbff" }
            : zip.length < 5
            ? { border: "2px solid #ff6e6e" }
            : { border: "2px solid #a0f190" }
        }
      />
      <button type="submit" style={{ opacity: 0 }} />

      <Link
        to={`/search/${zip}`}
        className={zip === null || zip.length < 5 ? "link hidden" : "link"}
      >
        <h4>Start Searching!</h4>
      </Link>
    </div>
  );
};

export default Info;
