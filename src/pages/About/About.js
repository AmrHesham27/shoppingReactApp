import Layout from "../../components/layout/Layout/Layout";
import Story from "../../components/About/Story/Story";
import WhyUs from "../../components/About/WhyUs/WhyUs";
import Brands from "../../components/About/Brands/Brands";

function About() {
  return (
    <Layout>
      <Story />
      <WhyUs />
      <Brands />
    </Layout>
  );
}

export default About;
