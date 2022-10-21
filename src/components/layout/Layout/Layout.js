import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import AppContext from "../../../context/app-context";
import Cart from "../../Cart/Cart";
import SliderNavbar from "../Header/SliderNavbar/SliderNavbar";
import styles from "./Layout.module.css";

function Layout(props) {
  const ctx = useContext(AppContext);

  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {ctx.cartIsShown && <Cart />}
        {ctx.navbarIsShown && <SliderNavbar />}
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
