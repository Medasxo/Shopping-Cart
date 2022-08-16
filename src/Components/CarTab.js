
const CarTab = (props) => {
    
  return (
    <div className="carTab">
        <button className= "exitButton" type="Button" onClick={props.hideTab}>X</button>
        <img src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <button className="addButton" type="Button">Add To Cart</button>
    </div>
      
  );
}

export default CarTab;
