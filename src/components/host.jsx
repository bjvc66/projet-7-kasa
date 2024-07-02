import React from 'react';

function Host(props) {
    return (
      <div className='badge'>
        <span className="nom">{props.name}</span>
        <img
          className="photo"
          src={props.picture}
          alt="Propriétaire"
        />
      </div>
    );
}

export default Host;