import React from 'react';
import './../style/components/AppartmentPage.scss';
import Star from './../assets/images/Star.png';
import Chevron from './../assets/images/Chevron.png';
import Carrousel from './carrousel.jsx';
function AppartmentPage() {
    
return (
  
     
<div className='appartmentPage'>
  <Carrousel/>
    
      
        <div className='appartment-header'>

          <div className='appartment-title'>
                <h1>Cosy loft on the Canal Saint-Martin</h1>
                <h2>Paris,île de France</h2> 
                <div className='Tag'>
                <span className='appartmentTag1'>Cosy</span>
                <span className='appartmentTag2'>Canal</span>
                <span className='appartmentTag3'>Paris 10</span>
                </div>
          </div>

          <div className='appartment-owner'>
              <div className='Dumas'>
                <h3><p>Alexandre</p><p>Dumas</p> </h3>
                <div className='badge'>.</div>
          </div>

          <div className='stars'>
                <span> <img src={Star}></img></span>
                <span><img src={Star}></img></span>
                <span><img src={Star}></img></span>
                <span><img src={Star}></img></span>
                <span><img src={Star}></img></span>
          </div>
        </div>
      </div> 



        <div className='info'>
              <div className='Description'>
                <div className='appartment-description'>
                    <p>Description</p>
                    <div className='Chevron'><img src={Chevron}></img></div>
                </div>

                <div className='DescriptionContent'>
                    <span>texte bla bla bla</span>
                </div>
              </div>
              <div className='Equipement'>
                <div className='appartment-Equipements'>
                  <p>Equipements</p>
                  <div className='Chevron'><img src={Chevron}></img></div>
                </div>
      
              <div className='EquipementContent'>
                  <span>texte tcha tcha tcha </span>
              </div>
            </div>
        </div>
  </div> 
    
  )
}   

export default  AppartmentPage
 