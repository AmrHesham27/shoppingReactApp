// React and components
import React, { useRef } from "react";
import Layout from "../../components/layout/Layout/Layout";
import { useContext } from "react";
import AppContext from "../../context/app-context";

// css
import styles from "./styles.module.css";

// redux
import { authActions } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import Message from "../../components/UI/Message/Message";

function Login() {
  console.log("login page");
  const ctx = useContext(AppContext);

  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      }),
    });
    response.json().then((data) => {
      if (response.ok) {
        localStorage.setItem("token", data["data"]["token"]);
        ctx.setMessage({
          text: "You were loggedIn successfully",
          type: "success",
        });
        dispatch(authActions.login(data["data"]["user"]));
      }
    });
  };

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
        <Message />
      </Layout>
    </>
  );
}

export default Login;
