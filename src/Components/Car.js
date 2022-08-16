import React from "react";
import { useState } from "react";
import CarTab from "./CarTab";

const Car = (props) => {
  const [carIsShown, setCarIsShown] = useState(false);
  const handleCarClick = event => {
    setCarIsShown(current => !current);
    console.log("a");
  };
  return (
    <div className="car">
      <img
        src={props.img}
        alt={props.name}
        onMouseOver={(e) => (e.currentTarget.src = props.img2)}
        onMouseOut={(e) => (e.currentTarget.src = props.img)}
        onClick={handleCarClick}
      />
      <h3>{props.name}</h3>
      {carIsShown && <CarTab hideTab={handleCarClick}/>}
    </div>
  );
};


export default Car;
