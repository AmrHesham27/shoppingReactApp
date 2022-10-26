import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useContext } from "react";
import AppContext from "../../context/app-context";
import Message from "../../components/UI/Message/Message";

function Register() {
  const ctx = useContext(AppContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        confirmedPassword: confirmPasswordInputRef.current.value,
      }),
    });
    response.json().then((data) => {
      ctx.setMessage({
        text: "You were registered successfully",
        type: "success",
      });
    });
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} d-flex flex-column align-items-center justify-content-center`}
        >
          <h4 className="my-4">Register</h4>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              ref={emailInputRef}
            />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              ref={passwordInputRef}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              ref={confirmPasswordInputRef}
            />
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Register
          </button>

          <div className="text-center">
            <p>
              Have an account?{" "}
              <a className={styles.bold} href="/login">
                Login
              </a>
            </p>
          </div>
        </form>
        <Message />
      </Layout>
    </>
  );
}

export default Register;
