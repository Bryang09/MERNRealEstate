import React from "react";
import Nav from "../../Nav/Nav";
import Gallery from "./Gallery/Gallery";

const Main = props => {
  const { info, low, high, small, large, houses } = props;
  return (
    <div className="Search">
      <Nav color="333" />

      <div className="top">
        <div className="sort">
          <h4 className="lowToHigh option" onClick={low}>
            Low to High
          </h4>
          <h4 className="highToLow option" onClick={high}>
            High to Low
          </h4>
          <h4 className="smallToLarge option" onClick={small}>
            Smallest First
          </h4>
          <h4 className="largeToSmall option" onClick={large}>
            Largest First
          </h4>
        </div>
        <div className="location">
          <h3>
            Searching Near <span> Pasadena, TX</span>
          </h3>
        </div>
      </div>

      <div className="imgGalleryContainer">
        <Gallery info={info} houses={houses} />
      </div>
    </div>
  );
};

export default Main;
