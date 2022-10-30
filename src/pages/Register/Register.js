import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/app-context";

function Register() {
  const navigate = useNavigate();
  const ctx = useContext(AppContext);
  const [formIsPending, setFormIsPeding] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormIsPeding(true);

    const response = await fetch(`${process.env.REACT_APP_SERVER}/register`, {
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
    if (response.ok) {
      ctx.setMessage({
        text: "You were registered successfully",
        type: "success",
      });
      return navigate("/login");
    } else {
      ctx.setMessage({
        text: "Error happened, try again",
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

          <button
            disabled={formIsPending}
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
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
