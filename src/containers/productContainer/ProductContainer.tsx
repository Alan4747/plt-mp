import styled from "styled-components";
import ProductList from "../productList/ProductList";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 !important;
  border-radius: 2px;
`;
const ProductContainer = () => (
  <Wrapper>
    <ProductList />
  </Wrapper>
);

export default ProductContainer;
