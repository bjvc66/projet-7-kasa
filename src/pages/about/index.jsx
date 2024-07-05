import React from 'react';
import Banner from '../../components/banner.jsx';
import Footer from "../../layout/footer.jsx";
import Header from "../../layout/header.jsx";
import BannerAbout from '../../assets/images/BannerAbout.png';
import Collapse from '../../components/collapes.jsx';



function About()  {
    return (
      <div className="home">
        <Header/>
        <main>
          
          
          <Banner  image={BannerAbout} />
         
         
              <div className='Description'>
               

                <Collapse title="Fiabilite">
                <div className='text'>
                <div className='text_description'>Les annonces sur Kasa garantissent une fiabilité totale</div>
                 <div className='text_description'>Les photos sont conformes aux logements</div>
                 <div className='text_description'>les informations sont régulièrement vérifiées </div>
                </div>
                </Collapse>

                <Collapse title="Respect">
                <div className='text'>
                <div className='text_description'>La bienveillance fait partie des valeurs fondatrices de Kasa</div>
                <div className='text_description'>Nous  excluons  tout comportement discriminatoire </div>
                <div className='text_description'> Nous  excluons tout comportement de perturbation </div>
               
                </div>
                </Collapse>

                <Collapse title="Service">
                <div className='text'>
                <div className='text_description'>Nos équipes se tiennent à votre disposition </div>
                <div className='text_description'>contactez nous si vous avez la moindre question</div>
                <div className='text_description'>Nous vous fourniront une expérience parfaite</div>

                </div>
                </Collapse>

                <Collapse title="Securite">
                <div className='text'>
              
                <div className='text_description'> chaque logement correspond aux critères de sécurité établis </div>
                <div className='text_description'> une note de securité est déposée a l'hote ou au locataire</div>
                <div className='text_description'>  nos équipes vérifient que les standards sont bien respectés</div>
                <div className='text_description'>  des ateliers sur la sécurité domestique sont organisés</div>
                  </div>
                </Collapse>
              
               
              </div>

            

          </main>
        <Footer/>
      </div>
    )
  }
  
export default About