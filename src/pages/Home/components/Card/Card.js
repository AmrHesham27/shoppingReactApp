import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../redux/cartSlice";
import { useContext } from "react";
import AppContext from "../../../../context/app-context";
import useFetchImage from "../../../../Hooks/useFetchImage";

function CustomCard(props) {
  const { product } = props;

  const ctx = useContext(AppContext);
  const dispatch = useDispatch();

  const handleClickCart = () => {
    ctx.showCart();
    dispatch(
      cartActions.addProduct({
        id: product._id,
        imgId: product.imgId,
        imgExt: product.imgExt,
        name: product.name,
        price: product.price,
        qty: 1,
        priceId: product.priceId,
      })
    );
  };

  const image = useFetchImage(product["imgId"], product["imgExt"]);

  return (
    <Card
      style={{ width: "18rem", fontWeight: "bold" }}
      className={styles.myCard}
    >
      <div className={styles.imgContainer}>
        {image && <Card.Img variant="top" src={image} />}
        <div className={styles.productOptions}>
          <button onClick={handleClickCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div className="d-flex flex-row justify-content-center">
          {[...Array(5)].map((value, index) => (
            <FontAwesomeIcon
              icon={faStar}
              size="1x"
              style={{ color: "gold" }}
              key={index}
            />
          ))}
        </div>
        <Card.Text>{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
