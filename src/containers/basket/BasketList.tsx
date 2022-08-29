import React, { useState, useEffect } from "react";
import { getBasketItems } from "../../features/basket/basketSlice";
import { useAppSelector } from "../../app/hooks";
import { Divider, Row } from "antd";
import styled from "styled-components";
import howManyItemsInTheBasket from "../../utils/howManyItemsInTheBasket";
import Basket from "./Basket";
import calculateBasketAmount from "../../utils/calculateBasketAmount";

const Wrapper = styled(Row)`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 9px;
  margin-left: 0px !important;
  margin-right: 0px !important;
  display: inline-block;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 576px) {
    background-color: #fafafa;
  }
`;
const TotalAmount = styled.div`
  border: 2px solid #189078;
  border-radius: 2px;
  padding: 17px 24px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-align: center;
  background-color: #189078;
`;

const BasketList = () => {
  const [items, setItems] = useState<any>([]);
  const basket = useAppSelector(getBasketItems);

  useEffect(() => {
    setItems(basket.items);
  }, [basket.items]);

  return (
    <>
      {items.length === 0 ? (
        <Row justify="center">
          <span style={{ fontSize: "25px", fontWeight: "900", color: "gray" }}>
            Your basket is empty
          </span>
        </Row>
      ) : (
        <Wrapper gutter={[24, 20]}>
          {items &&
            items.map((item: any, i: any) => (
              <Basket
                key={i}
                product={item.item}
                basketCount={howManyItemsInTheBasket(basket, item.item)}
                url={item.item.img}
                price={item.item.price}
              />
            ))}
          <Divider />
          <TotalAmount> {calculateBasketAmount({ basket })} </TotalAmount>
        </Wrapper>
      )}
    </>
  );
};

export default BasketList;
