import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout/Layout";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import CardsCarousel from "./components/CardsCarousel/CardsCarousel";
import Subscripe from "./components/Subscripe/Subscripe";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/products`);
    const data = await response.json();
    if (response.ok) setProducts(data["data"]);
  }, []);

  return (
    <Layout>
      <HeroCarousel />
      <CardsCarousel products={products} />
      <Subscripe />
    </Layout>
  );
}

export default Home;
