import Layout from "../components/Layout";
import Header from "../containers/header/Header";
import Footer from "../components/Footer";
import ProductContainer from "../containers/productContainer/ProductContainer";

const Home = () => (
  <Layout>
    <Header />
    <ProductContainer />
    <Footer />
  </Layout>
);

export default Home;
