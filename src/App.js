// react
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux/authSlice";
import { cartActions } from "./redux/cartSlice";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

// pages
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Orders = React.lazy(() => import("./pages/Dashboard/Orders"));

const SpinnerPage = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
    </div>
  );
};

function App() {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { itemsNumber: cartItemsNumber, items: cartItems } = useSelector(
    (state) => state.cart
  );

  const NotLoggedInRoute = (page, path) => {
    if (isLoggedIn) {
      return (
        <Route path={path} element={<Navigate to="/dashboard" replace />} />
      );
    }
    return <Route path={path} element={page} />;
  };

  const ProtectedRoute = (page, path) => {
    if (!isLoggedIn) {
      return <Route path={path} element={<Navigate to="/login" replace />} />;
    }
    return <Route path={path} element={page} />;
  };

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

  return (
    <Suspense fallback={<SpinnerPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {NotLoggedInRoute(<Login />, "/login")}
        {NotLoggedInRoute(<Register />, "/register")}

        {ProtectedRoute(<Dashboard />, "/dashboard")}

        <Route path="/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
