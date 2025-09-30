import { Link } from 'react-router';
import pilarHorizontal from '../assets/logos/PILAR logo_horizontaal.png';
import LanguageSelector from './LanguageSelector';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="blurred-square" />
      <Link to="/">
        <img
          src={pilarHorizontal}
          alt="logo-pilar"
          className="pilar-logo-horizontal"
        />
      </Link>
      <LanguageSelector />
    </div>
  );
};

export default NavBar;
