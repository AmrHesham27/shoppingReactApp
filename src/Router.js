// react
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import React, { Suspense } from "react";

// redux
import { useSelector } from "react-redux";

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
const Dashboard = React.lazy(() => import("./pages/Dashboard/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

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

function Router() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const NotLoggedInRoute = () => {
    if (isLoggedIn) throw redirect("/dashboard");
    return;
  };

  const ProtectedRoute = () => {
    if (!isLoggedIn) throw redirect("/login");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "contact",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <ContactUs />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <Login />
        </Suspense>
      ),
      loader: NotLoggedInRoute,
    },
    {
      path: "register",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <Register />
        </Suspense>
      ),
      loader: NotLoggedInRoute,
    },
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <Dashboard />
        </Suspense>
      ),
      loader: ProtectedRoute,
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<SpinnerPage />}>
          <NotFound />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
