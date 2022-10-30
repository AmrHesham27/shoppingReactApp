// React and components
import React, { useRef, useState } from "react";
import Layout from "../../components/layout/Layout/Layout";
import { useContext } from "react";
import AppContext from "../../context/app-context";
import { useNavigate } from "react-router-dom";

// css
import styles from "./styles.module.css";

function Login() {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const [formIsPending, setFormIsPeding] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormIsPeding(true);
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
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data["data"]["token"]);
      localStorage.setItem("user", JSON.stringify(data["data"]["user"]));
      localStorage.setItem("isLoggedIn", true);
      ctx.setMessage({
        text: "You were loggedIn successfully",
        type: "success",
      });
      return navigate("/dashboard/orders");
    } else {
      ctx.setMessage({
        text: "Your credientials are wrong",
        type: "error",
      });
    }
    setFormIsPeding(false);
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

          <button
            disabled={formIsPending}
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>

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
