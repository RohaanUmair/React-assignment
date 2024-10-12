import "./header.css";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header({ isUserLoggedIn }) {
  return (
    <header>
      <div className="section1">
        <img className="logo" src="src/assets/Logo.png" alt="logo" />
        <h1 className="logo-text">Furniro</h1>
      </div>

      <div className="section2">
        <ul>
          <Link style={{textDecoration: 'none', color: 'black'}} to={'/'}>
            <li>Home</li>
          </Link>

          <Link style={{textDecoration: 'none', color: 'black'}} to={'/shop'}>
            <li>Shop</li>
          </Link>

          <li>About</li>

          <Link style={{textDecoration: 'none', color: 'black'}} to={'/contact'}>
            <li>Contact</li>
          </Link>

        </ul>
      </div>


      <div className="section3">

        <Link to={isUserLoggedIn? '/signedin' : '/login'} style={{height: 30}} >
          <RiUserSettingsLine className="icons" />
        </Link>

        <IoSearchOutline className="icons" />
        <IoMdHeartEmpty className="icons" />

        <Link to={'/cart'} style={{height: 30}} >
          <IoCartOutline className="icons" />
        </Link>
      </div>

    </header>
  );
}
