import React from "react";
import Layout from "../../components/layout/Layout/Layout";
import HeroCarousel from "../../components/Home/HeroCarousel/HeroCarousel";
import CardsCarousel from "../../components/Home/CardsCarousel/CardsCarousel";
import Subscripe from "../../components/Home/Subscripe/Subscripe";

function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <CardsCarousel />
      <Subscripe />
    </Layout>
  );
}

export default Home;
