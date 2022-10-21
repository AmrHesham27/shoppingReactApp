import image1 from "../../../assets/images/brands/01.webp";
import image2 from "../../../assets/images/brands/02.webp";
import image3 from "../../../assets/images/brands/03.webp";
import image4 from "../../../assets/images/brands/04.webp";
import image5 from "../../../assets/images/brands/05.webp";
import image6 from "../../../assets/images/brands/06.webp";
import image7 from "../../../assets/images/brands/07.webp";
import image8 from "../../../assets/images/brands/08.webp";
import image9 from "../../../assets/images/brands/09.webp";
import image10 from "../../../assets/images/brands/10.webp";
import styles from "./Brands.module.css";

function Brands() {
  const brands = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ].map((img) => (
    <div class="col">
      <div class={`p-3 border rounded brand-box ${styles.card}`}>
        <div class="d-flex align-items-center">
          <a href="javascript:;">
            <img src={img} class="img-fluid" alt="" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="section-padding section">
      <div class="separator section-padding">
        <div class="line"></div>
        <h3 class="mb-0 h3 fw-bold">Shop By Brands</h3>
        <div class="line"></div>
      </div>
      <div class="brands">
        <div class="row row-cols-2 row-cols-lg-5 g-4">{brands}</div>
      </div>
    </section>
  );
}

export default Brands;
