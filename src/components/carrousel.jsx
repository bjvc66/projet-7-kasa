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
    setindexPicture((indexpicture + 1)% pictures.lenght)
  }
 
//<img className="left" src={LeftArrow}/>
  return (
    
  <div className="image_carousel">
<button onClick={movetonext}>next</button>
<button>previous</button>
{pictures.map((picture,i)=>(

 <img key= {picture} alt="" className={getClassName(i)} src={picture} />
 

))}

  </div>
    
  );
}

export default Carrousel;

