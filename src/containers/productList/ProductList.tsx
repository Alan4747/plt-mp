import React, { useState, useEffect } from "react";
import ListProduct from "../../services/ListProducts";
import { getBasketItems } from "../../features/basket/basketSlice";
import { useAppSelector } from "../../app/hooks";
import { Row } from "antd";
import styled from "styled-components";
import Product from "../product/Product";
import howManyItemsInTheBasket from "../../utils/howManyItemsInTheBasket";

const Wrapper = styled(Row)`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 9px;
  margin-left: 0px !important;
  margin-right: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    background-color: #fafafa;
  }
`;
const ProductList = () => {
  const basket = useAppSelector(getBasketItems);
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    ListProduct().then((list) => {
      setProducts(list);
    });
  }, []);
  return (
    <>
      <Wrapper gutter={[24, 20]}>
        {products &&
          products.map((item: any, i: any) => (
            <Product
              key={i}
              product={item}
              basketCount={howManyItemsInTheBasket(basket, item)}
              url={item.img}
              price={item.price}
            />
          ))}
      </Wrapper>
    </>
  );
};

export default ProductList;
