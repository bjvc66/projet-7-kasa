import React from 'react';

import Banner from '../../components/banner/index.jsx';
import Footer from "../../components/footer/index.jsx";
import Header from "../../components/header/index.jsx";
import BannerAbout from '../../assets/images/BannerAbout.png';

function About()  {
    return (
      <div className="home">
        <Header/>
        <main>
          
          
          <Banner  image={BannerAbout} />
          
        
        </main>
        <Footer/>
      </div>
    )
  }
  
export default About