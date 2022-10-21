import SlidesPerView from "../../../components/UI/SlidesPerView/SlidesPerView";
import image1 from "../../../assets/images/FaeturedProducts/01.webp";
import image2 from "../../../assets/images/FaeturedProducts/02.webp";
import image3 from "../../../assets/images/FaeturedProducts/03.webp";
import image4 from "../../../assets/images/FaeturedProducts/04.webp";
import image5 from "../../../assets/images/FaeturedProducts/05.webp";
import image6 from "../../../assets/images/FaeturedProducts/06.webp";
import image7 from "../../../assets/images/FaeturedProducts/07.webp";
import image8 from "../../../assets/images/FaeturedProducts/08.webp";
import Card from "../Card/Card";
import React from "react";

function CardsCarousel() {
  const slides = [
    { img: image1, name: "black dress", stars: 5, price: 44, id: 1 },
    { img: image2, name: "yellow dress", stars: 5, price: 64, id: 2 },
    { img: image3, name: "red dress", stars: 5, price: 72, id: 3 },
    { img: image4, name: "gray dress", stars: 5, price: 63, id: 4 },
    { img: image5, name: "green dress", stars: 5, price: 52, id: 5 },
    { img: image6, name: "pink dress", stars: 5, price: 64, id: 6 },
    { img: image7, name: "blue dress", stars: 5, price: 61, id: 7 },
    { img: image8, name: "red dress", stars: 5, price: 74, id: 8 },
  ].map((slide, key) => {
    return (
      <Card
        img={slide.img}
        name={slide.name}
        stars={slide.stars}
        price={slide.price}
        id={slide.id}
        key={key}
      />
    );
  });

  return (
    <div className="my-5">
      <div className="text-center pb-3 mb-5">
        <h3 className="mb-0 h3 fw-bold">Featured Products</h3>
        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
      </div>
      <SlidesPerView slides={slides} />
    </div>
  );
}

export default CardsCarousel;
