import React from "react";
import './../style/components/banner.scss';

function Banner({ image, texte }) {
  return (
    <div>
      <div className="banner">
        <img classeName="banner_img" src={image} alt="Bannière" />
        <span className="banner_txt">{texte}</span>
      </div>
    </div>
  );
}
export default Banner;
 