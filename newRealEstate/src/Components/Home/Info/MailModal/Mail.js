import React from "react";

import "../ShareModal/Share.scss";
import "./Mail.scss";

const Mail = props => {
  const { img, onMail, mail, name, info } = props;

  return (
    <section
      className="Mail"
      style={mail ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
    >
      <div className="mailModal">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="form">
          <div className="container">
            <div className="title">
              <h3>
                Interested In <br /> <span> {name}</span>?
              </h3>
            </div>
            <div className="formContent">
              <form>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Type Name Here"
                    onChange={info}
                  />
                </div>
                <div className="input">
                  <input
                    type="number"
                    name="phone"
                    id=""
                    placeholder="Enter Phone Number"
                    onChange={info}
                  />
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Email"
                    onChange={info}
                  />
                </div>
              </form>
            </div>{" "}
            <div className="submit">
              <h4>Submit</h4>
            </div>
          </div>

          <h6 className="notNow" onClick={onMail}>
            Not Now
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Mail;
