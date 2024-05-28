


import { Link} from 'react-router-dom';
import './header.css';
import Logo from '../../assets/images/logo.png';

function Header() {
   return (
      <nav className='ContHeader'>
         <Link to="/">
            <img className='HomeLogo' alt='Logo kasa' src={Logo} />
         </Link>

         <div className='navigation'>
            <Link to="/" className='OneLink'>
               Accueil
            </Link>

            <Link to="/about" className='TwoLink'>
               A Propos
            </Link>
         </div>
      </nav>
   )
 }
 
 export default Header
