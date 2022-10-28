import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import HeroCarousel from "../../components/Home/HeroCarousel/HeroCarousel";
import CardsCarousel from "../../components/Home/CardsCarousel/CardsCarousel";
import Subscripe from "../../components/Home/Subscripe/Subscripe";
import { useLoaderData, Await, defer } from "react-router-dom";

function Home() {
  const { products } = useLoaderData();
  return (
    <>
      <Await resolve={products}>
        {(products) => (
          <Layout>
            <HeroCarousel />
            <CardsCarousel products={products} />
            <Subscripe />
          </Layout>
        )}
      </Await>
    </>
  );
}

export default Home;

export const getHomeData = async () => {
  const response = await fetch("http://localhost:4000/products");
  if (response.ok) {
    const data = await response.json();
    let products = data["data"];

    products.map(async (product) => {
      const url = `http://localhost:4000/images/${product.imgId}/${product.imgExt}`;
      const response = await fetch(url);
      const blob = await response.blob();
      const img = URL.createObjectURL(blob);
      let newProduct = product;
      newProduct.img = img;
    });

    return defer({ products: data["data"] });
  }
};
