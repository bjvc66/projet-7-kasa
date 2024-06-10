import React from 'react';
import '../../style/components/Card_gallery.scss';

function Card({image, title}) {
    return (
      
      <div className="card">
        <img src={image} alt={title} className="card_img" />
       <span className="card_title">{title}</span>
      </div>
      
    );
}

export default Card;

