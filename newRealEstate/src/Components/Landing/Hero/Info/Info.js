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

      <form onChange={onZip}>
        <input
          type="number"
          value={zip}
          placeholder="Type Zip Code"
          style={
            zip === null || zip.length === 0
              ? {
                  borderImage:
                    "linear-gradient(90deg, #afdeff, #5399e2) 3 / 1 / 0 stretch"
                }
              : zip.length < 5 || zip.length > 5
              ? {
                  borderImage:
                    "linear-gradient(90deg, #ff91d3, #ea2e2e) 3 / 1 / 0 stretch"
                }
              : {
                  borderImage:
                    "linear-gradient(90deg, #91ffbd, #00f3ff) 3 / 1 / 0 stretch"
                }
          }
        />

        <Link
          to={`/search/${zip}`}
          className={
            zip === null || zip.length < 5 || zip.length > 5
              ? "link hidden"
              : "link"
          }
        >
          <button
            type="submit"
            style={{ height: 0, width: 0, padding: 0, border: 0 }}
          />
          <h4>Start Searching!</h4>
        </Link>
      </form>
    </div>
  );
};

export default Info;

{
  /* <Link
to={{
  pathname: `/search/${props.results}`,
  state: {
    search: props.results
  }
}}
style={{ height: "25px", marginLeft: "10px" }}
>
{" "}
<button
  type="submit"
  style={{ height: 0, width: 0, padding: 0, border: 0 }}
/>
<img
  src="https://img.icons8.com/windows/50/ffffff/search.png"
  style={{ height: "25px", color: "#fff" }}
  alt="search"
  type="submit"
/>
</Link> */
}
