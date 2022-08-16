import {useState} from 'react';
const CarTab = (props) => {
    const addCarToCart = () => {
        props.setCarsInCart(current => [...current, {name: props.name, img: props.img2}]);
        props.incrementCart();
    }
    
  return (
    <div className="carTab">
        <button className= "exitButton" type="Button" onClick={props.hideTab}>X</button>
        <img src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <button className="addButton" type="Button" onClick={addCarToCart}>Add To Cart</button>
    </div>
  );
}

export default CarTab;
