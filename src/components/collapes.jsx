import React, { useState } from 'react';
import './../style/components/collapse.scss';
import Chevron from './../assets/images/Chevrondown.png';
import Chevronup from './../assets/images/Chevronup.png';

function Collapse({title,children}) {
    const [isOpen,setisOpen]=useState(true)

    const Display = () => {
      setisOpen(!isOpen);
    };

    return (

      <div className="collapse">
        <div className='collapse_title'>
          <p>{title}</p>
          <p onClick={Display}>
            {isOpen ? (
              <img src={Chevron}  alt="chevron"/>
                ) : (
              <img src={Chevronup}  alt="chevron"/>
            )}
          </p>
        </div>
                
        <div className='collapse_content'>
          {isOpen && <p>{children}</p>}
        </div>
      </div>
    );
  }
export default Collapse;

