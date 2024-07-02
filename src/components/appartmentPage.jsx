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
    console.log(id)

 return (
<div className='appartmentPage'>
      <Carrousel pictures={Logement.pictures}/> 
      <div className='appartment-header'>
          <div className='appartment-title'>
                <h1>{Logement.title}</h1>

                <h2>Paris,île de France</h2> 
                <Tag/>
          </div>
          <div className='appartment_owner'>
            <div className="Dumas">
             <div className="Alexandre_Dumas" >
                <h3><p>Alexandre</p><p>Dumas</p> </h3>
              
               <Host/>
               </div>   
               
                <Star/>
                </div>
      </div>
     
</div> 

          <div className='info'>
              <Collapse title="Description">
                  <div className='text_description'>
                   Vous serez a 50m du canal saint-martin ou vous pourrez
                   pique-niquer l'été a coté de nombreux bars et restaurants
                   Au coeur de Paris avec 5 lignes de metro et de nombreux
                   bus.Logement parfait pour les voyageurs en solo et les
                   voyageurs d'affaires.Vous etes a la station de la gare de 
                   l'est 7minutes a pied. 
                    
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
 