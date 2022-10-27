// React
import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";

// redux
import { useSelector } from "react-redux";

// Components
import CartItem from "./CartItem";
import Modal from "../../components/UI/Modal/Modal";

// css
import styles from "./Cart.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const ctx = useContext(AppContext);

  const { items: cartItemsObject } = useSelector((state) => state.cart);

  const [cartItemsElements, setCartItemsElements] = useState([]);

  const turnItemsToElements = useCallback((cartItemsObject) => {
    const cartItemsArray = Object.values(cartItemsObject);
    setCartItemsElements(
      cartItemsArray.map((item) => (
        <CartItem
          img={item.img}
          name={item.name}
          qty={item.qty}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))
    );
  }, []);

  useEffect(() => {
    if (cartItemsObject) {
      turnItemsToElements(cartItemsObject);
    }
  }, [cartItemsObject, turnItemsToElements]);

  return (
    <Modal>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h4 className="mb-0 fw-bold">Your Cart</h4>
          <FontAwesomeIcon icon={faClose} size={"2x"} onClick={ctx.hideCart} />
        </div>

        <div className={styles.body}>{cartItemsElements}</div>

        <div className={`${styles.footer}`}>
          <button
            type="button"
            className={`btn btn-lg btn-dark ${styles["btn-ecomm"]} py-3`}
          >
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
