import React from "react";

import "../ShareModal/Share.scss";
import "./Mail.scss";

const Mail = props => {
  const {
    img,
    onMail,
    mail,
    houseName,
    info,
    name,
    email,
    phone,
    submit,
    onSubmit
  } = props;

  console.log(name.length, phone.length);

  function validateEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  const checkIfAllTrue =
    name.length > 3 && phone.length === 10 && validateEmail(email);

  console.log(checkIfAllTrue);

  return (
    <section
      className="Mail"
      style={
        submit
          ? { opacity: 0, pointerEvents: "none" }
          : mail
          ? { opacity: 1 }
          : !mail
          ? { opacity: 0, pointerEvents: "none" }
          : null
      }
    >
      <div className="mailModal">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="form">
          <div className="container">
            <div className="title">
              <h3>
                Interested In <br /> <span> {houseName}</span>?
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
                    style={
                      name.length > 3
                        ? {
                            borderImage:
                              "linear-gradient(90deg,#6aff8a , blue) 3"
                          }
                        : {
                            borderImage:
                              "linear-gradient(90deg,#ff8888 , blue) 3"
                          }
                    }
                  />
                </div>
                <div className="input">
                  <input
                    type="number"
                    name="phone"
                    id=""
                    placeholder="Enter Phone Number"
                    onChange={info}
                    style={
                      phone.length === 10
                        ? {
                            borderImage:
                              "linear-gradient(90deg,#6aff8a , blue) 3"
                          }
                        : {
                            borderImage:
                              "linear-gradient(90deg,#ff8888 , blue) 3"
                          }
                    }
                  />
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Email"
                    onChange={info}
                    style={
                      validateEmail(email)
                        ? {
                            borderImage:
                              "linear-gradient(90deg,#6aff8a , blue) 3"
                          }
                        : {
                            borderImage:
                              "linear-gradient(90deg,#ff8888 , blue) 3"
                          }
                    }
                  />
                </div>
              </form>
            </div>{" "}
            <div className="submit" onClick={onSubmit}>
              <h4 className={checkIfAllTrue ? "onSubmit" : "disable"}>
                Submit
              </h4>
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
