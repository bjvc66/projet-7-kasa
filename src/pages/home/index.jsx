import React from 'react';

import Banner from '../../components/banner/index.jsx';
import Gallery from '../../components/Gallery/index.jsx'
import BannerImage from '../../assets/images/BannerImage.png';

function Home()  {
    return (
      <div className="home">
        
        <main>
          
          
          <Banner texte="Chez vous, partout et ailleurs" image={BannerImage} />
          
         <Gallery/>
        </main>
        
      </div>
    )
  }
  
export default Home