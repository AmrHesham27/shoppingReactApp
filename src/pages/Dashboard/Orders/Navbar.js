import React from "react";
import styles from "./index.module.css";

function Navbar() {
  return (
    <div className="col-12 col-xl-3 filter-column">
      <nav className="navbar navbar-expand-xl flex-wrap p-0">
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbarFilter"
          aria-labelledby="offcanvasNavbarFilterLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title mb-0 fw-bold text-uppercase"
              id="offcanvasNavbarFilterLabel"
            >
              Account
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body account-menu">
            <div
              className={`list-group w-100 rounded-0 ${styles["nav-links"]}`}
            >
              <a
                href="account-orders.html"
                className={`list-group-item ${styles.link} ${styles.active}`}
              >
                <i className="bi bi-basket3 me-2"></i>Orders
              </a>
              <a
                href="account-profile.html"
                className={`list-group-item ${styles.link}`}
              >
                <i className="bi bi-person me-2"></i>Profile
              </a>
              <a
                href="account-edit-profile.html"
                className={`list-group-item ${styles.link}`}
              >
                <i className="bi bi-pencil me-2"></i>Edit Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
