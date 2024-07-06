import React from 'react';
import Footer from "../../layout/footer.jsx";
import Header from "../../layout/header.jsx";
import Banner from '../../components/banner.jsx';
import Gallery from '../../components/gallery.jsx';
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