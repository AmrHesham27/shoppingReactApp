import image from "../../../../assets/images/about.jpeg";
import styles from "./Story.module.css";

function Story() {
  return (
    <section className={`row g-4 section-padding ${styles.section}`}>
      <div className="col-12 col-xl-6">
        <h3 className="fw-bold">Our Story</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College.
        </p>
      </div>
      <div className="col-12 col-xl-6">
        <img src={image} className="img-fluid" alt="" />
      </div>
    </section>
  );
}

export default Story;
