import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Data from "./../data/logement.json";
import './../style/components/AppartmentPage.scss';
import Collapse from './../components/collapes.jsx';
import Carrousel from './../components/carrousel.jsx';
import Tag from './../components/tag.jsx';
import Star from './../components/star.jsx';
import Host from './../components/host.jsx';

function AppartmentPage() {
    const { id } = useParams();
    const Logement= Data.find((logement) => logement.id === id);
      /* Tags */
  const tagsLogement = Logement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

 return (
<div className='appartmentPage'>
      <Carrousel pictures={Logement.pictures}/> 
      <div className='appartment-header'>
          <div className='appartment-title'>

                <h1>{Logement.title}</h1>
                <h2>{Logement.location}</h2> 
                
               
                 {/* Tags */}
                 <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
                
          </div>
          <div className='appartment_owner'>
            <div className="Dumas">
             <div className="Alexandre_Dumas" >
                <h3><p>Alexandre</p><p>Dumas</p> </h3>
              
{/* Host */}
<div className="nom-proprio">
<Host
  name={Logement?.host.name}
  picture={Logement?.host.picture}
/>
</div>
  </div> 
  {/* Star */}
  <div className="description-info__proprietaire__rate">
                  <Star score={Logement.rating} />
                </div>  
               
               
                </div>
      </div>
     
</div> 

          <div className='info'>
              <Collapse title="Description">
                  <div className='text_description'>
                  <p>Climatisation</p>
                  <p> Wi-fi </p>
                  <p> Cuisine</p>
                  <p>  Espace de travail </p>
                  <p> Fer a repasser </p>
                  <p> Seche-cheveux </p>
                  <p>Cintres </p>
                    
                    </div>
              </Collapse>
              <Collapse title="Equipement">
                  <div className='text_equipement'>
                  <p>Climatisation</p>
                  <p> Wi-fi </p>
                  <p> Cuisine</p>
                  <p>  Espace de travail </p>
                  <p> Fer a repasser </p>
                  <p> Seche-cheveux </p>
                  <p>Cintres </p>
                     </div>
              </Collapse>
          </div>
</div>
  )}   
export default  AppartmentPage
 