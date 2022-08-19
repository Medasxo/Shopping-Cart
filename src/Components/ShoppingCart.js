import "../ShoppingCart.css";

function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
      <button className="exitButton" onClick={props.cartIsShown}>
        X
      </button>
      <div className="shoppingHeader">Cart({props.carCount} items)</div>
      <div className="listOfCars">
        {props.carCount === 0 ? (
          <div className="empty">Shopping cart is empty</div>
        ) : (
          props.carsInCart.map((carInCart) => {
            return (
              <div className="listItem">
                <img className="carImg" src={carInCart.img} />
                {carInCart.name}
              </div>
            );
          })
        )}
      </div>
      <button type="Button" className="checkout">
        Proceed To Checkout
      </button>
    </div>
  );
}

export default ShoppingCart;
