import porscheLogo from "../img/porscheLogo.png";
import cartIcon from "../img/cartIcon.png";
import "../Header.css";


function Header() {
  return (
    <nav className="header">
      <div className="porsche">
        <img src={porscheLogo} alt="porsche logo" />
        Porsche
      </div>
      <div className="links">
        Shop
        <img src={cartIcon} alt="cart icon" />
      </div>
    </nav>
  );
}

export default Header;
