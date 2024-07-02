import './../style/components/error.scss';
import { NavLink } from "react-router-dom";


 function Error() {

const TextError="Oups! La page que vous demandez n'existe pas."

  return (
    
      <div className="ErrorContainer">
        <p className="ErrorTitle">404</p>
        <h1 className="ErrorText">{TextError}</h1>
     
       <div className='retourner'> <NavLink to="/">
         Retourner sur la page d'accueil
        </NavLink>
        </div>
    </div>
  );
}
export default Error