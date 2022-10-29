// React
import { useCallback, useContext, useEffect, useState, useRef } from "react";
import AppContext from "../../context/app-context";

// redux
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

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
  const dispatch = useDispatch();

  const { items: cartItemsObject, itemsNumber: cartItemsNumber } = useSelector(
    (state) => state.cart
  );
  let totalPrice = 0;
  if (cartItemsNumber)
    Object.values(cartItemsObject).forEach(
      (item) => (totalPrice += item.qty * item.price)
    );

  const [cartItemsElements, setCartItemsElements] = useState([]);

  const turnItemsToElements = useCallback((cartItemsObject) => {
    const cartItemsArray = Object.values(cartItemsObject);
    setCartItemsElements(
      cartItemsArray.map((product, index) => (
        <CartItem product={product} key={index} />
      ))
    );
  }, []);

  let firstRender = useRef(true);
  const persistCartData = useCallback(() => {
    if (
      JSON.parse(localStorage.getItem("cartItemsNumber")) &&
      !cartItemsNumber &&
      firstRender.current
    ) {
      dispatch(
        cartActions.setCart({
          items: JSON.parse(localStorage.getItem("cartItems")),
          itemsNumber: JSON.parse(localStorage.getItem("cartItemsNumber")),
        })
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsObject));
    localStorage.setItem("cartItemsNumber", JSON.stringify(cartItemsNumber));
  }, [cartItemsNumber, cartItemsObject, dispatch]);

  useEffect(() => {
    persistCartData();
    if (cartItemsObject) {
      turnItemsToElements(cartItemsObject);
    }
    firstRender.current = false;
  }, [cartItemsObject, turnItemsToElements, persistCartData]);

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
            <span className="mx-3">Checkout</span>
            {totalPrice ? `$${totalPrice}` : undefined}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
