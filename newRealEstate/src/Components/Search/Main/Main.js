import React from "react";
import Nav from "../../Nav/Nav";
import Gallery from "./Gallery/Gallery";

const Main = props => {
  const { info, low, high, small, large, houses, zip, location } = props;
  return (
    <div className="Main">
      <Nav color="fff" />

      <div className="filter">
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
        <div className="location"></div>
      </div>

      <div className="imgGalleryContainer">
        <h3>
          Searching Near <span> Pasadena, TX</span>
          {/* Searching Near <span> {location}</span> */}
        </h3>
        <div className="gallery">
          <Gallery info={info} houses={houses} zip={zip} location={location} />
        </div>
      </div>
    </div>
  );
};

export default Main;
