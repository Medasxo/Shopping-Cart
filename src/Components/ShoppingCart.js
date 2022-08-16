import "../ShoppingCart.css";

function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
        <button className="exitButton" onClick={props.cartIsShown}>X</button>
    </div>
  );
}

export default ShoppingCart;
