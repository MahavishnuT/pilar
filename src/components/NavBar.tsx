import { Link } from 'react-router';
import pilarHorizontal from '../assets/logos/PILAR logo_horizontaal.png';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={pilarHorizontal}
          alt="logo-pilar"
          className="pilar-logo-horizontal"
        />
      </Link>
    </div>
  );
};

export default NavBar;
