import "../Shop.css";
import Header from "./Header";
import Car from "./Car";

import Boxster from "../img/cars/718boxster.png";
import Boxster2 from "../img/cars/718boxster2.jpg";
import Taycan from "../img/cars/taycan.png";
import Taycan2 from "../img/cars/taycan2.jpg";


function Shop() {
  const cars = [
    { name: "Porsche 718 Boxster", img: Boxster, img2: Boxster2},
    { name: "Porsche Taycan", img: Taycan, img2: Taycan2 },
  ];
  return (
    <div className="shop">
      <Header />
      <div className="shopContent">
        <div className="shopGrid">
          {cars.map((car) => {
            return <Car name={car.name} img={car.img} img2={car.img2}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
