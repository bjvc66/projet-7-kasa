import React from 'react';
import './../style/components/host.scss';

function Host(props) {
  return (
    <div>
    <span className="nom-proprietaire">{props.name}</span>
      <img
        className="photo-proprietaire"
        src={props.picture}
        alt="Propriétaire"
      />
    </div>
  );
}

export default Host;