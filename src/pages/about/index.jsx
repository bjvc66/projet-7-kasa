import React from 'react';

import Banner from '../../components/banner/index.jsx';

import BannerAbout from '../../assets/images/BannerAbout.png';

function About()  {
    return (
      <div className="home">
        
        <main>
          
          
          <Banner  image={BannerAbout} />
          
        
        </main>
        
      </div>
    )
  }
  
export default About