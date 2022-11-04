// components
import Header from "../Header/Header";
import Cart from "../../Cart/Cart";
import SliderNavbar from "../Header/SliderNavbar/SliderNavbar";
import Footer from "../Footer/Footer";
import Message from "../../UI/Message/Message";

// context
import { useContext, useRef, useCallback, useEffect } from "react";
import AppContext from "../../../context/app-context";

// css
import styles from "./Layout.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cartSlice";

function Layout(props) {
  const ctx = useContext(AppContext);
  const dispatch = useDispatch();

  const {
    items: cartItemsObject,
    itemsCount: cartItemsCount,
    total: cartTotal,
  } = useSelector((state) => state.cart);

  let firstRender = useRef(true);
  const persistCartData = useCallback(() => {
    if (
      JSON.parse(localStorage.getItem("cartItemsCount")) &&
      !cartItemsCount &&
      firstRender.current
    ) {
      dispatch(
        cartActions.setCart({
          items: JSON.parse(localStorage.getItem("cartItems")),
          itemsCount: JSON.parse(localStorage.getItem("cartItemsCount")),
          total: JSON.parse(localStorage.getItem("cartTotal")),
        })
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItemsObject));
    localStorage.setItem("cartItemsCount", JSON.stringify(cartItemsCount));
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  }, [cartItemsCount, cartItemsObject, cartTotal, dispatch]);

  useEffect(() => {
    persistCartData();
    firstRender.current = false;
  }, [cartItemsObject, persistCartData]);

  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {ctx.cartIsShown && <Cart />}
        {ctx.navbarIsShown && <SliderNavbar />}
        {props.children}
      </div>
      <Message />
      <Footer />
    </>
  );
}

export default Layout;
