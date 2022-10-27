import Layout from "../../../components/layout/Layout/Layout";
import { Row, Col, Container } from "react-bootstrap";
import OrderItem from "./OrderItem";
import image1 from "../../../assets/images/FaeturedProducts/01.webp";
//import styles from "./index.module.css";
import Navbar from "./Navbar";

function Orders() {
  const orders = [
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 1,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 2,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 3,
    },
  ].map((order) => (
    <OrderItem
      name={order.name}
      qty={order.qty}
      img={order.img}
      desc1={order.desc1}
      desc2={order.desc2}
      key={order.id}
    />
  ));

  return (
    <Layout>
      <section className="section-padding">
        <Container>
          <div className="d-flex align-items-center px-3 py-2 border mb-4">
            <div className="text-start">
              <h4 className="mb-0 h4 fw-bold">Account - Orders</h4>
            </div>
          </div>
          <div
            className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarFilter"
          >
            <span>
              <i className="bi bi-person me-2"></i>Account
            </span>
          </div>
          <Row>
            <Navbar />
            <div className="col-12 col-xl-9">
              <div className="card rounded-0 mb-3 bg-light">
                <div className="card-body">
                  <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                    <div className="">
                      <h5 className="mb-1 fw-bold">All Orders</h5>
                      <p className="mb-0">for anytime</p>
                    </div>
                    <div className="order-search flex-grow-1">
                      <form>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control ps-5 rounded-0"
                            placeholder="Search Product..."
                          />
                          <span className="position-absolute top-50 product-show translate-middle-y">
                            <i className="bi bi-search ms-3"></i>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="filter">
                      <button
                        type="button"
                        className="btn btn-dark rounded-0"
                        data-bs-toggle="modal"
                        data-bs-target="#FilterOrders"
                      >
                        <i className="bi bi-filter me-2"></i>Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {orders}
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Orders;
