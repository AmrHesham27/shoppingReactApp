// bootstrap
import { Col, Card, Table } from "react-bootstrap";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <Col xl={9}>
      <Card className="rounded-0">
        <Card.Body className="p-lg-5">
          <h5 class="mb-4 fw-bold">Profile Details</h5>
          <Table striped>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>Jhon Deo</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>+99-85XXXXXXXX</td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>name@example.com</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>10/03/1993</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>United Kingdom</td>
              </tr>
            </tbody>
          </Table>
          <div class="">
            <button
              type="button"
              class="btn btn-outline-dark btn-ecomm px-5 rounded-0"
            >
              <FontAwesomeIcon icon={faPencil} />{" "}
              <span className="mx-2">Edit</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Profile;
