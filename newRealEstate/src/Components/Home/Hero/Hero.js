import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more, seeMore, house } = props;

  const images = house.img;

  const result = images.map((res, i) => {
    return (
      <div
        className={`homeHero full`}
        key={i}
        style={{
          backgroundImage: `url(${house.img[i]})`
        }}
      >
        <div
          className="escapeButton"
          onClick={seeMore}
          style={more ? { opacity: 1 } : { opacity: 0 }}
        >
          <h4>X</h4>
        </div>
      </div>
    );
  });

  return result;
  // ? (
  //   result
  // ) : (
  //   <div
  //     className="homeHero"
  //     style={{ backgroundImage: `url(${house.img[0]})` }}
  //   />
  // );
};

export default HomeHero;
