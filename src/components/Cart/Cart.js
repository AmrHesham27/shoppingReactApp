import Modal from "../../components/UI/Modal/Modal";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";
import { useSelector } from "react-redux";

function Cart() {
  const ctx = useContext(AppContext);

  const cartItemsObject = useSelector((state) => state.cart.items);
  const [cartItemsElements, setCartItemsElements] = useState([]);

  useEffect(() => {
    if (cartItemsObject) {
      const cartItems = Object.values(cartItemsObject);

      setCartItemsElements(
        cartItems.map((item, index) => (
          <CartItem
            img={item.img}
            name={item.name}
            qty={item.qty}
            price={item.price}
            key={index}
            id={item.id}
          />
        ))
      );
    }
  }, [cartItemsObject]);

  return (
    <Modal>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h4 className="mb-0 fw-bold">Your Cart</h4>
          <FontAwesomeIcon icon={faClose} size={"2x"} onClick={ctx.hideCart} />
        </div>

        <div className={styles.body}>{cartItemsElements}</div>

        <div className={`${styles.footer} p-3`}>
          <button
            type="button"
            className={`btn btn-lg btn-dark ${styles["btn-ecomm"]} px-5 py-3`}
          >
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
