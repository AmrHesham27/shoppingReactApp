// react
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import Spinner from "react-bootstrap/Spinner";

// pages
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const LoginPage = React.lazy(() => import("./pages/Login/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register/Register"));

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
  return (
    <Suspense fallback={<SpinnerPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
