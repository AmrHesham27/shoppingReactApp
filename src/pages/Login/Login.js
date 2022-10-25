// React and components
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";

// css
import styles from "./styles.module.css";

// redux
import { authActions } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      }),
    });
    response
      .json()
      .then((data) => {
        localStorage.setItem("token", data["data"]["token"]);
        dispatch(authActions.login(data["data"]["user"]));
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const sendUserToDashboard = () => {
      if (isLoggedIn) {
        navigate("/dashboard");
      }
    };

    return sendUserToDashboard();
  }, [isLoggedIn]);

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} d-flex flex-column align-items-center justify-content-center`}
        >
          <h4 className="my-4">Login</h4>

          <div className="form-outline mb-4">
            <input
              ref={emailInputRef}
              type="email"
              id="form2Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              ref={passwordInputRef}
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <button className="btn btn-primary btn-block mb-4">Sign in</button>

          <div className="text-center">
            <p>
              Not a member?{" "}
              <a className={styles.bold} href="/register">
                Register
              </a>
            </p>
          </div>
        </form>
      </Layout>
    </>
  );
}

export default Login;
