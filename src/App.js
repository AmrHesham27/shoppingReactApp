// react
import React, { useEffect, useState } from "react";
import Router from "./Router";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux/authSlice";
import { cartActions } from "./redux/cartSlice";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();

  const { itemsNumber: cartItemsNumber, items: cartItems } = useSelector(
    (state) => state.cart
  );

  const loginUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:4000/me", {
        method: "GET",
        headers: new Headers({
          Authorization: `${token}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(authActions.login(data["data"]));
        });
    }
  };

  const persistCartData = () => {
    if (
      JSON.parse(localStorage.getItem("cartItemsNumber")) &&
      !cartItemsNumber &&
      firstRender
    ) {
      dispatch(
        cartActions.setCart({
          items: JSON.parse(localStorage.getItem("cartItems")),
          itemsNumber: JSON.parse(localStorage.getItem("cartItemsNumber")),
        })
      );
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartItemsNumber", JSON.stringify(cartItemsNumber));
  };

  useEffect(() => {
    loginUser();
    persistCartData();
    setFirstRender(false);
  }, [loginUser, persistCartData, setFirstRender]);

  return <Router />;
}

export default App;
