
import React from 'react';
import orangeStar from "./../assets/images/startRempli.png";
import greyStar from "./../assets/images/startVide.png";
import './../style/components/star.scss';





//Component
function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            className="rating-container__stars"
            src={orangeStar}
            alt=""
            key={rangeElem.toString()}
          />
        ) : (
          <img
            className="rating-container__stars"
            src={greyStar}
            alt=""
            key={rangeElem.toString()}
          />
        )
      )}
    </div>
  )
}

export default Rating