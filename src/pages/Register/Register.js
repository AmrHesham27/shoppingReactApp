import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import styles from "./styles.module.css";
import { useRef } from "react";
function Register() {
  const API_KEY = process.env.API_KEY;
  console.log(API_KEY);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmedPassword = confirmPasswordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`
    );
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

          <button type="button" className="btn btn-primary btn-block mb-4">
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
      </Layout>
    </>
  );
}

export default Register;
