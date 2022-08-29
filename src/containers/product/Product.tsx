import { Col, Image, Row } from "antd";
import { ItemType } from "../../types/ItemType";
import styled from "styled-components";
import ProductName from "./ProductName";
import BasketButtonGroup from "../basketButtonGroup/BasketButtonGroup";

type Props = {
  product: ItemType;
  basketCount: number;
  url: string;
  price: number;
  currency?: "$";
};

const Wrapper = styled(Col)`
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px 0;
    border-radius: 2px;
    background-color: #ffffff;
  }
`;
const Div = styled.div`
  border: 1px solid #f3f0fe;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 7px;
  text-align: left;
`;
const ProductPrice = styled.div`
  color: #189078;
  height: 25px;
  font-size: 15px;
`;

const Product: React.FC<Props> = ({
  product,
  basketCount,
  url,
  price = 0,
  currency = "$",
}) => (
  <Wrapper xs={24} sm={12} md={12} lg={8} xl={4}>
    <Row justify={"center"}>
      <Div>
        <Image
          style={{ backgroundColor: "#C4C4C4", borderRadius: "3px" }}
          src={url}
          alt={product.name}
          width={200}
        />
      </Div>
    </Row>
    <Row>
      <ProductPrice>
        {currency} <b>{price}</b>
      </ProductPrice>
    </Row>
    <Row>
      <ProductName name={product.name} />
    </Row>
    <Row justify={"center"}>
      <BasketButtonGroup item={product} basketCount={basketCount} />
    </Row>
  </Wrapper>
);

export default Product;
