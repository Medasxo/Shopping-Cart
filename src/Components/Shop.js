
import "../Shop.css";
import Header from "./Header";
import Car from "./Car";

function Shop() {
  const cars = [
    { name: "Porsche 718 Boxster"},
    { name: "Porsche Taycan"},
  ]
  return (
    <div className="shop">
      <Header />
      <div className="shopContent">
        <div className="shopGrid">
        {cars.map((car) => {
          return(
          <Car name={car.name} />
          );
        })}
          </div>
      </div>
    </div>
  );
}

export default Shop;
