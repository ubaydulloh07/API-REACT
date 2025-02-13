
import { ShoppingCart } from "lucide-react";
import "./header.css";

function Header() {
  

  return (
    <header className="header">
      <div className="header-left">
        <img className="logo" src="./images/image.png" alt="" />
        <h2>Grocery Store</h2>
      </div>
      <button className="cart-button">
        <ShoppingCart className="cart-icon" size={28} />
        <span className="cart-badge">0</span>
      </button>
    </header>
  );
}

export default Header;