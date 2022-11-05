import React from "react";
import SearchOrders from "./SearchOrders";
import OrderItem from "./OrderItem";
import { defer, useLoaderData } from "react-router-dom";
import OneOrder from "./oneOrder";
import Pagination from "./Pagination";

function OrdersPage() {
  const { data } = useLoaderData();

  const orders = data["data"].map((order) => {
    return {
      createdAt: order.createdAt,
      products: JSON.parse(order.products),
      totalAmount: order.totalAmount,
    };
  });

  let ordersElements = [];
  orders.forEach((order, index) => {
    let products = [];
    Object.values(order["products"]).forEach((product) => {
      products.push(
        <OrderItem
          product={product["data"]}
          qty={product["quantity"]}
          key={product["data"]["priceId"]}
        />
      );
    });
    ordersElements.push(
      <OneOrder
        products={products}
        totalAmount={order.totalAmount / 100}
        createdAt={order.createdAt}
        key={index}
      />
    );
  });

  const emptyListMessage = !ordersElements.length && (
    <>
      <h5>You have no orders yet.</h5>
      <p>start shopping now</p>
    </>
  );

  return (
    <>
      <SearchOrders />
      <Pagination pagesCount={data["pagesNumber"]} />
      {emptyListMessage}
      {ordersElements}
    </>
  );
}

export default OrdersPage;

export const getOrdersData = async (page) => {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER}/ordersData/${page}`,
    {
      headers: new Headers({
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }),
    }
  );
  const responseData = await response.json();
  let data = responseData["data"];
  return defer({ data });
};
