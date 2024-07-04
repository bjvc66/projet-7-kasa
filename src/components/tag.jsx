import React from 'react';
import './../style/components/tag.scss';



function Tag({ nom }) {
  return (
    
    
    <div className="tag_container">
      <span className="tag_container_button">{nom}</span>
    </div>
  
  
  );
}

export default Tag;