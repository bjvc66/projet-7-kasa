import React, { useState } from "react";
import './../style/components/carrousel.scss';
import leftArrow from'./../assets/images/ArrowLeft.png';
import rightArrow from'./../assets/images/ArrowRight.png';
function Carrousel({pictures}) {
  
  let [index, setindex] = useState(0);
  let currentPicture=[index] 


 const getClassName=(i)=>{
  if(i === index) return 'show';
  return "";
 }

  const movetonext = () => {
    const newIndex = index + 1;
    setindex(newIndex >= pictures.length ? 0 : newIndex);
  };

  
    
    const movetoprevious = () => {
      const newIndex = index - 1;
     setindex(newIndex < 0 ? pictures.length - 1 : newIndex);
    };
  
return (

   <div className="carrousel">

    <div className='arrowRight'onClick={movetonext}>
     <img src= {rightArrow} alt=""/>
      </div>
      <div className="picture">

        <img src={currentPicture} alt=""/>
      </div>
    <div className='arrowLeft'onClick={movetoprevious}>
      <img src ={ leftArrow} alt=""/>
      </div>
    
  <div className="image_carousel">

{pictures.map((picture,i)=>(
<img key= {picture} alt="" className={getClassName(i)} src={picture} />
 ))
 }


</div> 
  </div>
    
  );
}

export default Carrousel;


 
 
  
  
  
  