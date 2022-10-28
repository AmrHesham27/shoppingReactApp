import { useState } from "react";
import Layout from "../../components/layout/Layout/Layout";
import { Row, Col, Button, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Message from "../../components/UI/Message/Message";
import styles from "./styles/index.module.css";

function Orders(props) {
  const [navbarIsShown, setNavbarIsShown] = useState(false);

  const handleShowNavbar = () => setNavbarIsShown(true);

  return (
    <Layout>
      <section className="section-padding">
        <Button
          variant="primary"
          className={`d-xl-none ${styles["account-btn"]}`}
          onClick={handleShowNavbar}
        >
          ACCOUNT
        </Button>
        <Container>
          <div className="d-flex align-items-center px-3 py-2 border mb-4">
            <div className="text-start">
              <h4 className="mb-0 h4 fw-bold">Account - Orders</h4>
            </div>
          </div>

          <Row>
            <Navbar
              isShown={navbarIsShown}
              setNavbarIsShown={setNavbarIsShown}
            />
            <Col xl={9}>{props.children}</Col>
          </Row>
        </Container>
      </section>
      <Message />
    </Layout>
  );
}

export default Orders;
