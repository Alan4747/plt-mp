import { Col, Image, Row } from "antd";
import { ItemType } from "../../types/ItemType";
import styled from "styled-components";
import ProductName from "../product/ProductName";
import BasketButtonGroup from "../basketButtonGroup/BasketButtonGroup";
import DeleteIcon from "../../assets/svg/delete.svg";
import { deleteAllItems } from "../../features/basket/basketSlice";
import { useAppDispatch } from "../../app/hooks";

type Props = {
  product: ItemType;
  basketCount: number;
  url: string;
  price: number;
  currency?: "$";
};

const Wrapper = styled(Col)`
  border: 1px solid #f3f0fe;
  padding: 6px;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px 0;
    border-radius: 2px;
    background-color: #ffffff;
  }
`;
const ProductPrice = styled.div`
  color: #189078;
  height: 25px;
  font-size: 15px;
`;
const Div = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Basket: React.FC<Props> = ({
  product,
  basketCount,
  url,
  price = 0,
  currency = "$",
}) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={4}>
          <Image style={{ borderRadius: "3px" }} width={200} src={url} />
        </Col>
        <Col span={4}>
          <ProductName name={product.name} />
        </Col>
        <Col span={4}>
          <ProductPrice>
            {currency} <b>{price}</b>
          </ProductPrice>
        </Col>
        <Col span={4}>
          <BasketButtonGroup item={product} basketCount={basketCount} />
        </Col>
        <Col span={4}>
          <Div onClick={() => dispatch(deleteAllItems(product))}>
            <img width={25} src={DeleteIcon} alt={product.name} />
          </Div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Basket;
