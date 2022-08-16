import "../ShoppingCart.css";

function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
        <button className="exitButton" onClick={props.cartIsShown}>X</button>
        <div className="shoppingHeader">Cart({props.carCount} items)</div>
        {props.carsInCart.map((carInCart)=>{
          return(
            <div className="listItem">{carInCart.name}</div>
          )
        })}
    </div>
  );
}

export default ShoppingCart;
