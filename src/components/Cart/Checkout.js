// css
import styles from "./Cart.module.css";

// context
import { useContext } from "react";
import AppContext from "../../context/app-context";

function Checkout(props) {
  const ctx = useContext(AppContext);

  const { totalPrice, cartItemsObject } = props;

  const redirectToStrapi = async () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      ctx.setMessage({
        text: "Please login before checkout",
        type: "error",
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const items = Object.values(cartItemsObject).map((item) => {
      return {
        price: item.priceId,
        quantity: item.qty,
      };
    });

    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          email: user.email,
        }),
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      window.location.replace(responseData["data"]);
    }
  };

  return (
    <button
      type="button"
      onClick={redirectToStrapi}
      className={`btn btn-lg btn-dark ${styles["btn-ecomm"]} py-3`}
    >
      <span className="mx-3">Checkout</span>
      {totalPrice ? `$${totalPrice}` : undefined}
    </button>
  );
}

export default Checkout;
