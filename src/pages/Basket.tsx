import Layout from "../components/Layout";
import Header from "../containers/header/Header";
import Footer from "../components/Footer";
import BasketContainer from "../containers/basket/BasketContainer";

const Basket = () => (
  <Layout>
    <Header />
    <BasketContainer />
    <Footer />
  </Layout>
);

export default Basket;
