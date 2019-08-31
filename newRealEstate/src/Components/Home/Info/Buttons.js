import React from "react";

const Buttons = props => {
  const { seeMore, onShare, onMail } = props;
  return (
    <div className="buttons">
      <div className="seeMore">
        <h4 onClick={seeMore}>See More!</h4>
      </div>

      {/* THIS WILL OPEN THE SHARE MODAL */}
      <div className="share">
        <h4>
          <i className="fa fa-share" onClick={onShare} />
        </h4>
      </div>

      {/* THIS WILL OPEN THE MAIL MODAL */}
      <div className="mail">
        <h4>
          <i className="fa fa-envelope" aria-hidden="true" onClick={onMail} />
        </h4>
      </div>
    </div>
  );
};

export default Buttons;
