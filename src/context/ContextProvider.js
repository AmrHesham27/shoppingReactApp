import AppContext from "./app-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [navbarIsShown, setNavbarIsShown] = useState(false);

  const cartContext = {
    cartIsShown,
    showCart: () => setCartIsShown(true),
    hideCart: () => setCartIsShown(false),
    navbarIsShown,
    showNavbar: () => setNavbarIsShown(true),
    hideNavbar: () => setNavbarIsShown(false),
    hideAll: () => {
      setCartIsShown(false);
      setNavbarIsShown(false);
    },
  };

  return (
    <AppContext.Provider value={cartContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default CartProvider;
