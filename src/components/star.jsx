import React from 'react';
import emptyStar from "./../assets/images/startRempli.png";
import fullStar from "./../assets/images/startVide.png";
import './../style/components/star.scss';

function Star(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
return (
  <div className="star-contenair">
    {notes.map((note) =>
      score >= note ? (
        <img
          key={note.toString()}
          className="etoile"
          src={emptyStar}
          alt="star"
        />
      ) : (
        <img
          key={note.toString()}
          className="etoile"
          src={fullStar}
          alt="star"
        />
      )
    )}
  </div>
);
}

export default Star;
