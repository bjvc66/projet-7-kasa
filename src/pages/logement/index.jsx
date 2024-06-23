import React from 'react';
import Footer from "../../layout/footer.jsx";
import Header from "../../layout/header.jsx";
import '../../style/components/AppartmentPage.scss';
import AppartmentPage from "../../components/appartmentPage.jsx"


    
function Logement()  {
  return (
    <div className="logement">
      <Header/>
      <main>
       <AppartmentPage/> 
      
      </main>
      <Footer/>
    </div>
  )
}

export default Logement
