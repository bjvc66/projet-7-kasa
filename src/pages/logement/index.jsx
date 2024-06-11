import React from 'react';
import Footer from "../../components/footer/index.jsx";
import Header from "../../components/header/index.jsx";
import FicheLogement from "../../components/ficheLogement/index.jsx";


function Logement()  {
    return (
      <div className="logement">
        <Header/>
        <main>
          
          <FicheLogement/>
      
        </main>
        <Footer/>
      </div>
    )
  }
  
export default Logement
