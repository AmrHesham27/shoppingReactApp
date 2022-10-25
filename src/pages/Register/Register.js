import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
function Register() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    response
      .json()
      .then((data) => {
        console.log("registered successfully");
      })
      .catch((error) => {
        setError(error);
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
      </Layout>
    </>
  );
}

export default Register;
