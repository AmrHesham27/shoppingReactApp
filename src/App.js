// react
import React, { useCallback, useEffect, useRef } from "react";
import Router from "./Router";

// redux
import { useDispatch } from "react-redux";
import { authActions } from "./redux/authSlice";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const firstRender = useRef(true);
  console.log(firstRender.current);
  const dispatch = useDispatch();

  const loginUser = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${process.env.REACT_APP_SERVER}/me`, {
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
  }, [dispatch]);

  useEffect(() => {
    loginUser();
    firstRender.current = false;
  }, [loginUser]);

  return <Router />;
}

export default App;
