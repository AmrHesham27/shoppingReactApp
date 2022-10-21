import React from "react";
import shipingImage from "../../../assets/images/shipping.webp";
import supportImage from "../../../assets/images/support.webp";
import moneyImage from "../../../assets/images/money.webp";
import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <section className={styles.section}>
      <div class="separator section-padding">
        <div class="line"></div>
        <h3 class="mb-0 h3 fw-bold">Why Choose Us</h3>
        <div class="line"></div>
      </div>
      <div class="row row-cols-1 row-cols-xl-3 g-4 why-choose">
        <div class="col d-flex">
          <div class="card rounded-0 shadow-none w-100">
            <div class="card-body">
              <img src={shipingImage} width="60" alt="" />
              <h5 class="my-3 fw-bold">Free Shipping</h5>
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="card rounded-0 shadow-none w-100">
            <div class="card-body">
              <img src={moneyImage} width="60" alt="" />
              <h5 class="my-3 fw-bold">100% Back Gaurantee</h5>
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="card rounded-0 shadow-none w-100">
            <div class="card-body">
              <img src={supportImage} width="60" alt="" />
              <h5 class="my-3 fw-bold">Online Support 24/7</h5>
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
