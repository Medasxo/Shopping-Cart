import "../App.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="mainHome">
        <h2>Porsche</h2>
        <h4>There Is No Substitute</h4>
        <Link to="/shop">
        <button type="button" className="shopButton">SHOP</button>
        </Link>
      </div>
      
    </div>
  );
}

export default App;
