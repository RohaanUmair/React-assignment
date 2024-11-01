import "./header.css";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (  
    <header>
      <div className="section1">
        <img className="logo" src="/assets/Logo.png" alt="logo" />
        <h1 className="logo-text">Furniro</h1>
      </div>

      <div className="section2">
        <ul>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <li>Home</li>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/shop'}>
            <li>Shop</li>
          </Link>

          <li>About</li>

          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}>
            <li>Contact</li>
          </Link>

        </ul>

        <AiOutlineMenu className="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />

        {
          isMenuOpen ? (<Menu />) : (null)
        }


      </div>


      <div className="section3">

        <Link to={'/login'} style={{ height: 30 }} >
          <RiUserSettingsLine className="icons" />
        </Link>

        <IoSearchOutline className="icons" />
        <IoMdHeartEmpty className="icons" />

        <Link to={'/cart'} style={{ height: 30 }} >
          <IoCartOutline className="icons" />
        </Link>
      </div>

    </header>
  );
}




function Menu() {
  return (
    <div className="menu">
      <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
        <p>Home</p>
      </Link>

      <Link style={{ textDecoration: 'none', color: 'black' }} to={'/shop'}>
        <p>Shop</p>
      </Link>

      <p>About</p>

      <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}>
        <p>Contact</p>
      </Link>

      <div>
        <Link to={'/login'} style={{ height: 30 }} >
          <RiUserSettingsLine className="icons" />
        </Link>

        <IoSearchOutline className="icons" />
        <IoMdHeartEmpty className="icons" />

        <Link to={'/cart'} style={{ height: 30 }} >
          <IoCartOutline className="icons" />
        </Link>
      </div>
    </div>
  )
}