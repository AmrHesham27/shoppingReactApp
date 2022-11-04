import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function OrderItem(props) {
  const { product, qty } = props;
  const [image, setImage] = useState(null);
  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/images/${product["imgId"]}/${product["imgExt"]}`;
    fetch(url).then((response) => {
      response.blob().then((blob) => setImage(URL.createObjectURL(blob)));
    });
  }, [setImage, product]);

  return (
    <Card className="border-0 rounded-0 mb-3">
      <Card.Body>
        <div className="d-flex flex-column flex-xl-row gap-3">
          <div>
            <Card.Img
              src={image}
              style={{ width: "120px" }}
              alt=""
              className="rounded-0"
            />
          </div>
          <div className="flex-grow-1">
            <h5 className="fw-bold mb-1">{product.name}</h5>
            <p className="mb-0">
              {" "}
              {product.desc1} &amp; {product.desc2}
            </p>
            <div className="mt-3 hstack gap-2">
              {/* <button type="button" className="btn btn-sm border rounded-0">
                Size : XXL
              </button> */}
              <button type="button" className="btn btn-sm border rounded-0">
                Qty : {qty}
              </button>
            </div>
          </div>
          {/* 
          <div className="d-none d-xl-block vr"></div>
            <div className="d-grid align-self-start align-self-xl-center">
              <button
                type="button"
                className={`btn btn-outline-dark ${styles["btn-ecomm"]}`}
              >
                View Details
              </button>
          </div> 
          */}
        </div>
      </Card.Body>
      {/*
      can be used in the future to rate the product 
      <Card.Footer className="rounded-0 bg-transparent">
        <div className="d-flex align-items-center gap-3">
          <p className="mb-1 fw-bold">Rate this Product</p>
          <div className="ratings">
            <i className="bi bi-star-fill text-warning h6"></i>
            <i className="bi bi-star-fill text-warning h6"></i>
            <i className="bi bi-star-fill text-warning h6"></i>
            <i className="bi bi-star h6"></i>
            <i className="bi bi-star h6"></i>
          </div>
        </div>
      </Card.Footer> */}
    </Card>
  );
}

export default OrderItem;
