import React from "react";
import styles from "../styles/index.module.css";
import { Col, Navbar, Offcanvas } from "react-bootstrap";

function MyNavbar(props) {
  const handleCloseNavbar = () => {
    const setNavbarIsShown = props.setNavbarIsShown;
    setNavbarIsShown(false);
  };

  const isShown = props.isShown;

  return (
    <Col xl={3}>
      <Navbar className="p-0">
        <Offcanvas
          show={isShown}
          onHide={handleCloseNavbar}
          responsive="xl"
          className="w-100 p-0"
          style={{ maxWidth: "360px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Account</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className={`list-group w-100 rounded-0 ${styles["nav-links"]}`}
            >
              <a
                href="/dashboard/orders"
                className={`list-group-item ${styles.link} ${styles.active}`}
              >
                <i className="bi bi-basket3 me-2"></i>Orders
              </a>
              <a
                href="/dashboard/profile"
                className={`list-group-item ${styles.link}`}
              >
                <i className="bi bi-person me-2"></i>Profile
              </a>
              <a
                href="/dashboard/editProfile"
                className={`list-group-item ${styles.link}`}
              >
                <i className="bi bi-pencil me-2"></i>Edit Profile
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Col>
  );
}

export default MyNavbar;
