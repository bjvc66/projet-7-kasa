
import React from 'react';
import '../../style/components/Gallery.scss';
import { Link } from "react-router-dom";
import logements from "../../data/logement.json";
import Card from "../../components/Card/index.jsx";

function Gallery()  {
  return (
    <div className="home-gallery">
      {logements.map((logement) => {
        return (
          
            <Link to={'/logement/'+logement.identifiant}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
        
        )
      }
      )}
    </div>
    
     
  )
}
  
export default Gallery