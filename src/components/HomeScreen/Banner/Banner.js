import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="Banner">
        <div className="BannerTitle1">New Arrival</div>
        <div className="BannerTitle2">Discover Our New Collection</div>
        <div className="BannerDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </div>
        <div className="BannerBtn">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
