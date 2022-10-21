import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AppContext from "../../../context/app-context";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItemsNumber = useSelector((state) => state.cart.itemsNumber);

  const ctx = useContext(AppContext);

  const showNavbar = () => {
    ctx.showNavbar();
  };

  const showCart = () => {
    ctx.showCart();
  };

  const currentPage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.bars}>
          <FontAwesomeIcon icon={faBars} size="lg" onClick={showNavbar} />
        </div>
        <ul>
          <li className={currentPage === "" ? styles.active : ""}>
            <a href="/">Home</a>
          </li>
          <li className={currentPage === "about" ? styles.active : ""}>
            <a href="/about">About</a>
          </li>
          <li className={currentPage === "contact" ? styles.active : ""}>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faCartShopping} size="lg" onClick={showCart} />
        {cartItemsNumber !== 0 && (
          <div className={styles.counter} onClick={showCart}>
            {cartItemsNumber}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
