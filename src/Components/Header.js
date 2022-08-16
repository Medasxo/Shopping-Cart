import porscheLogo from "../img/porscheLogo.png";
import cartIcon from "../img/cartIcon.png";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <nav className="header">
      <div className="porsche">
        <img src={porscheLogo} alt="porsche logo" />
        <Link to = '/'>
        <p>Porsche</p>
        </Link>
        
      </div>
      <div className="links">
        <Link to = '/shop'>
        <p>Shop</p>
        </Link>
        <img src={cartIcon} alt="cart icon" onClick={handleClick}/>
        {isShown && <ShoppingCart cartIsShown={handleClick}/>}
      </div>
    </nav>
  );
}

export default Header;
