import React from "react";
import { Link } from "react-router-dom";
import logements from "./../data/logement.json";
import Card from "./../components/Card.jsx";
import './../style/components/Gallery.scss';

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;