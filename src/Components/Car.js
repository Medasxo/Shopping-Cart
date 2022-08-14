import React from "react";

const Car = (props) => {
  return (
    <div className="car">
        <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Car;