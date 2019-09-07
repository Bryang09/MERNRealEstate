import React from "react";

import { Link } from "react-router-dom";

import "./Error.scss";

const ErrorComponent = () => {
  return (
    <div className={"Error"}>
      <div className="errorContainer">
        <h1>404</h1>
        <h2>The Page Requested Doesn't Exist</h2>
        <Link to="/">Return</Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
