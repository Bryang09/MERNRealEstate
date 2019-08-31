import React from "react";

import "./Hero.scss";
import Info from "./Info/Info";

const Hero = props => {
  const { search, zip, onZip } = props;
  return (
    <div className="Hero">
      <div className={search ? `heroImage search` : "heroImage"} />
      <Info search={search} zip={zip} onZip={onZip} />
    </div>
  );
};

export default Hero;
