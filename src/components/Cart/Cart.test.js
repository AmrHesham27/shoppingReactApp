// libraries and redux
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

// components
import CartItem from "./CartItem";
import Cart from "./Cart";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import store from "../../redux/store";
import { renderWithProviders } from "../../redux/test-utils";

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
  describe("Test Cart functionality", () => {
    const preloadedState = {
      cart: {
        items: {
          "635c89db87e594f33aa29528": { ...product, qty: 1 },
        },
        itemsCount: 1,
        total: 54,
      },
    };

    test("can add product quantity", () => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element;
      });

      renderWithProviders(<Cart />, { preloadedState });

      fireEvent(
        screen.getByText("+"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(screen.getByText("2 X $54")).toBeInTheDocument();
    });

    test("can decrease quantity", () => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element;
      });

      renderWithProviders(<Cart />, { preloadedState });

      fireEvent(
        screen.getByText("-"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(screen.queryByText("1 X $54")).not.toBeInTheDocument();
    });

    test("can delete product", () => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element;
      });

      renderWithProviders(<Cart />, { preloadedState });

      fireEvent(
        screen.getByTestId("trash"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(screen.queryByText("1 X $54")).not.toBeInTheDocument();
    });
  });
});
