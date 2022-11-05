import { Card } from "react-bootstrap";

function OneOrder(props) {
  const { products, totalAmount, createdAt } = props;
  const date = new Date(createdAt);

  return (
    <Card className="rounded-0 mb-3">
      <Card.Body>
        <div className="d-flex flex-column flex-xl-row gap-3">
          <div className="d-flex flex-column ">{products}</div>
          <div className="d-none d-xl-block vr"></div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn border rounded-0">
              Amount : ${totalAmount}
            </button>
            <button type="button" className="btn border rounded-0">
              Time : {date.toLocaleDateString("en-US")}
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OneOrder;
