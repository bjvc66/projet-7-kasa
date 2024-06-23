import React from 'react';

import Banner from '../../components/banner.jsx';
import Footer from "../../layout/footer.jsx";
import Header from "../../layout/header.jsx";
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