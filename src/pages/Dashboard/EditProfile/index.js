// bootstrap
import { Col, Row, Card, Table, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormCheck from "react-bootstrap/FormCheck";

function index() {
  return (
    <Col xl={9}>
      <Card className="rounded-0">
        <Card.Body className="p-lg-5">
          <h5 className="mb-4 fw-bold">Edit Details</h5>
          <Form>
            <Row className="g-3" xs={1}>
              <Col>
                <FloatingLabel>
                  <Form.Control
                    type="text"
                    className="rounded-0"
                    id="floatingInputName"
                    placeholder="Name"
                  />
                  <Form.Label for="floatingInputName">Name</Form.Label>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel>
                  <Form.Control
                    type="text"
                    className="rounded-0"
                    id="floatingInputNumber"
                    placeholder="Name"
                    value="+99-85XXXXXXXX"
                  />
                  <Form.Label for="floatingInputNumber">
                    Mobile Number
                  </Form.Label>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel>
                  <Form.Control
                    type="text"
                    className="rounded-0"
                    id="floatingInputEmail"
                    placeholder="Email"
                    value="name@example.com"
                  />
                  <Form.Label for="floatingInputEmail">Email</Form.Label>
                </FloatingLabel>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <FormCheck type="radio" inline name="gender" />
                    <Form.Label>Male</Form.Label>
                  </Col>
                  <Col>
                    <FormCheck type="radio" inline name="gender" />
                    <Form.Label>Female</Form.Label>
                  </Col>
                </Row>
              </Col>
              <Col>
                <FloatingLabel>
                  <Form.Control
                    type="date"
                    className="rounded-0"
                    id="floatingInputDOB"
                    value=""
                  />
                  <Form.Label for="floatingInputDOB">Date of Birth</Form.Label>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel>
                  <Form.Control
                    type="text"
                    className="rounded-0"
                    id="floatingInputLocation"
                    placeholder="Location"
                    value="United Kingdom"
                  />
                  <Form.Label for="floatingInputLocation">Location</Form.Label>
                </FloatingLabel>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-dark py-3 btn-ecomm w-100 rounded-0"
                >
                  Save Details
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default index;
