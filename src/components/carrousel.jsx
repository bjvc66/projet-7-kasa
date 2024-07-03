import React, { useState } from "react";
import './../style/components/carrousel.scss';
import LeftArrow from'./../assets/images/ArrowLeft.png';
import RightArrow from'./../assets/images/ArrowRight.png';
function Carrousel({pictures}) {
  const [indexpicture, setindexPicture] = useState(0); 
 const getClassName=(i)=>{
  if(i === indexpicture) return 'show';
  return "";
 }
  const movetonext=()=>{
   
    setindexPicture(indexpicture === pictures.lenght - 1 ? 0: indexpicture + 1)
  }
  const movetoprevious=()=>{
    
      setindexPicture(indexpicture === 0 ? pictures.length - 1 : indexpicture - 1); // on repart au dernier slide quand on est au premier
    };
  
   
//<img className="left" src={LeftArrow}/>
  return (
   <div className="image_container">
    <button className='next'onClick={movetonext}>next</button>
    <button className='previous'onClick={movetoprevious}>previous</button>
    
  <div className="image_carousel">

{pictures.map((picture,i)=>(

 <img key= {picture} alt="" className={getClassName(i)} src={picture} />
 

))}
</div> 
  </div>
    
  );
}

export default Carrousel;

