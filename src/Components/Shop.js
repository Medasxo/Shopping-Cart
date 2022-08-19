import "../Shop.css";
import Header from "./Header";
import Car from "./Car";
import { useState } from "react";
import CartCircle from "../img/shopCircle.png";
import ShoppingCart from "./ShoppingCart";

import Boxster from "../img/cars/718boxster.png";
import Boxster2 from "../img/cars/718boxster2.jpg";
import Taycan from "../img/cars/taycan.png";
import Taycan2 from "../img/cars/taycan2.jpg";
import CaymanS from "../img/cars/718caymanS.png";
import CaymanS2 from "../img/cars/718caymanS2.jpg";
import Spyder from "../img/cars/718spyder.png";
import Spyder2 from "../img/cars/718spyder2.jpg";
import CarreraS from "../img/cars/911carreraS.png";
import CarreraS2 from "../img/cars/911carreraS2.jpg";
import TargaS from "../img/cars/911targaS.png";
import TargaS2 from "../img/cars/911targaS2.jpg";
import TurboS from "../img/cars/911turboS.png";
import TurboS2 from "../img/cars/911turboS2.jpg";
import GT3 from "../img/cars/911gt3.png";
import GT32 from "../img/cars/911gt32.jpg";
import PanameraS from "../img/cars/panameraS.png";
import PanameraS2 from "../img/cars/panameraS2.jpg";
import PanameraSTurismo from "../img/cars/panameraSTurismo.png";
import PanameraSTurismo2 from "../img/cars/panameraSTurismo2.jpg";
import Macan from "../img/cars/macan.png";
import Macan2 from "../img/cars/macan2.jpg";
import Cayenne from "../img/cars/cayenne.png";
import Cayenne2 from "../img/cars/cayenne2.jpg";

function Shop() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [carInCartCount, setCarInCartCount] = useState(0);
  const [carsInCart, setCarsInCart] = useState([]);

  const cars = [
    { name: "Porsche 718 Boxster", img: Boxster, img2: Boxster2 },
    { name: "Porsche 718 Cayman S", img: CaymanS, img2: CaymanS2 },
    { name: "Porsche 718 Spyder", img: Spyder, img2: Spyder2 },
    { name: "Porsche 911 Carrera S", img: CarreraS, img2: CarreraS2 },
    { name: "Porsche 911 Targa S", img: TargaS, img2: TargaS2 },
    { name: "Porsche 911 Turbo S", img: TurboS, img2: TurboS2 },
    { name: "Porsche 911 GT3", img: GT3, img2: GT32 },
    { name: "Porsche Taycan", img: Taycan, img2: Taycan2 },
    { name: "Porsche Panamera Turbo S", img: PanameraS, img2: PanameraS2 },
    {
      name: "Porsche Panamera Turbo S Sport Turismo",
      img: PanameraSTurismo,
      img2: PanameraSTurismo2,
    },
    { name: "Porsche Macan", img: Macan, img2: Macan2 },
    { name: "Porsche Cayenne", img: Cayenne, img2: Cayenne2 },
  ];

  function incrementCarInCartCount() {
    setCarInCartCount(carInCartCount + 1);
  }
  return (
    <div className="shop">
      <Header carCount={carInCartCount} carsInCart={carsInCart} />
      <div className="shopContent">
        <div className="shopGrid">
          {cars.map((car) => {
            return (
              <Car
                name={car.name}
                img={car.img}
                img2={car.img2}
                incrementCart={incrementCarInCartCount}
                setCarsInCart={setCarsInCart}
              />
            );
          })}
        </div>
        <img src={CartCircle} className="cartCircle" onClick={handleClick} />
        {isShown && (
          <ShoppingCart
            cartIsShown={handleClick}
            carCount={carInCartCount}
            carsInCart={carsInCart}
          />
        )}
      </div>
    </div>
  );
}

export default Shop;
