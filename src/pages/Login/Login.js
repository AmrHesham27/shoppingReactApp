import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import styles from "./styles.module.css";

function Login() {
  const handleSubmit = () => {};
  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit}
          className={`${styles.form} d-flex flex-column align-items-center justify-content-center`}
        >
          <h4 className="my-4">Login</h4>

          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <button type="button" className="btn btn-primary btn-block mb-4">
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
