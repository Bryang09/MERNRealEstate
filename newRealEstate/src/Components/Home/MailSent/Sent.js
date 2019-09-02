import React from "react";

import "./Sent.scss";

const Sent = props => {
  const { name, email, phone, submit, closeSuccess, onCloseSuccess } = props;

  return (
    <div
      className="Sent"
      style={
        submit && !closeSuccess
          ? { opacity: 1 }
          : { opacity: 0, pointerEvents: "none" }
      }
    >
      <div className="container">
        <h4>
          Thank You, <b>{name}</b>{" "}
        </h4>
        <h5>
          An Email Has Been Sent to <br />
          <b>{email}</b>{" "}
        </h5>
        <div className="radio">
          <input type="radio" name="radio" id="" />
          Send As Message To <b>{phone}</b>?
        </div>
        <div className="successNotNow">
          <h6 onClick={onCloseSuccess}>Exit</h6>
        </div>
      </div>
    </div>
  );
};

export default Sent;
