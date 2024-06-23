import React from "react";
import './../style/components/banner.scss';

function Banner({ image, texte }) {
    return (
      <div>
      <div className="banner">
        <img classeName="banner__img" src={image} alt="Bannière" />
        
        <span className="banner__txt">{texte}</span>
      </div>
      </div>
    );
  }
  
  export default Banner;
 