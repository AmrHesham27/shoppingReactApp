import React from "react";
import SearchOrders from "./SearchOrders";
import OrderItem from "./OrderItem";
import image1 from "../../../assets/images/FaeturedProducts/01.webp";
import { defer, useLoaderData } from "react-router-dom";

function OrdersPage() {
  const { data } = useLoaderData();
  console.log(data);

  /* const orders = [
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 1,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 2,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 3,
    },
  ].map((order) => (
    <OrderItem
      name={order.name}
      qty={order.qty}
      img={order.img}
      desc1={order.desc1}
      desc2={order.desc2}
      key={order.id}
    />
  )); */

  return (
    <>
      <SearchOrders />
      {/* {orders} */}
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
  if (response.ok) {
    const responseData = await response.json();
    let data = responseData["data"];
    return defer({ data });
  }
};
