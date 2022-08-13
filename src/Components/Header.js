import porscheLogo from "../img/porscheLogo.png";
import cartIcon from "../img/cartIcon.png";
import { Link } from "react-router-dom";
import "../Header.css";

function Header() {
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
        <img src={cartIcon} alt="cart icon" />
      </div>
    </nav>
  );
}

export default Header;
