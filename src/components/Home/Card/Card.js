import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cartSlice";
import { useContext } from "react";
import AppContext from "../../../context/app-context";

function CustomCard(props) {
  const ctx = useContext(AppContext);
  const dispatch = useDispatch();

  const handleClickCart = () => {
    ctx.showCart();
    dispatch(
      cartActions.addProduct({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        qty: 1,
      })
    );
  };

  return (
    <Card
      style={{ width: "18rem", fontWeight: "bold" }}
      className={styles.myCard}
    >
      <div className={styles.imgContainer}>
        <Card.Img variant="top" src={props.img} />
        <div className={styles.productOptions}>
          <button onClick={handleClickCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <div className="d-flex flex-row justify-content-center">
          {[...Array(props.stars)].map((value, index) => (
            <FontAwesomeIcon
              icon={faStar}
              size="1x"
              style={{ color: "gold" }}
              key={index}
            />
          ))}
        </div>
        <Card.Text>{`$${props.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
