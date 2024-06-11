import React from 'react';
import Footer from "../../components/footer/index.jsx";
import Header from "../../components/header/index.jsx";
import Banner from '../../components/banner/index.jsx';
import Gallery from '../../components/Gallery/index.jsx'
import BannerImage from '../../assets/images/BannerImage.png';

function Home()  {
    return (
      <div className="home">
        <Header/>
        <main>
          
          
          <Banner texte="Chez vous, partout et ailleurs" image={BannerImage} />
          
         <Gallery/>
        </main>
        <Footer/>
      </div>
    )
  }
  
export default Home