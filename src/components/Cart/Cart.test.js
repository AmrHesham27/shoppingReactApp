// libraries and redux
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components
import CartItem from "./CartItem";

// redux
import { Provider } from "react-redux";
import store from "../../redux/store";

const product = {
  id: "635c89db87e594f33aa29528",
  imgId: "03",
  imgExt: "webp",
  name: "Red dress",
  price: 54,
  qty: 1,
  priceId: "price_1LzTxME8uYwibX1N20pLants",
};

describe("Test Cart", () => {
  describe("Test Cart Item", () => {
    test("show product Name", () => {
      render(
        <Provider store={store}>
          <CartItem product={product} />
        </Provider>
      );
      const productName = screen.getByText(/Red dress/i);
      expect(productName).toBeInTheDocument();
    });

    test("show product Price and Quantity", () => {
      render(
        <Provider store={store}>
          <CartItem product={product} />
        </Provider>
      );
      const priceAndQty = screen.getByText("1 X $54");
      expect(priceAndQty).toBeInTheDocument();
    });
  });
});
