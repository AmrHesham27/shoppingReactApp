// React
import { useContext, useEffect } from "react";
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
import Checkout from "./Checkout";

function Cart() {
  const { hideCart } = useContext(AppContext);

  const { items: cartItemsObject, total: cartTotal } = useSelector(
    (state) => state.cart
  );

  const cartItemsElements = Object.values(cartItemsObject).map(
    (product, index) => <CartItem product={product} key={index} />
  );

  useEffect(() => {
    if (!cartItemsElements.length) hideCart();
  }, [cartItemsElements, hideCart]);

  return (
    <Modal>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h4 className="mb-0 fw-bold">Your Cart</h4>
          <FontAwesomeIcon icon={faClose} size={"2x"} onClick={hideCart} />
        </div>

        <div className={styles.body}>{cartItemsElements}</div>

        <div className={`${styles.footer}`}>
          <Checkout totalPrice={cartTotal} cartItemsObject={cartItemsObject} />
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
