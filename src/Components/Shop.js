import "../Shop.css";
import Header from "./Header";
import Car from "./Car";

import Boxster from "../img/cars/718boxster.png";
import Taycan from "../img/cars/taycan.png";

function Shop() {
  const cars = [
    { name: "Porsche 718 Boxster", img: Boxster },
    { name: "Porsche Taycan", img: Taycan },
  ];
  return (
    <div className="shop">
      <Header />
      <div className="shopContent">
        <div className="shopGrid">
          {cars.map((car) => {
            return <Car name={car.name} img={car.img} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
