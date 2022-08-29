import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { getBasketItems } from "../../features/basket/basketSlice";
import { useAppSelector } from "../../app/hooks";
import calculateBasketAmount from "../../utils/calculateBasketAmount";
import HeaderContainer from "./HeaderContainer";
import HeaderBasket from "./HeaderBasket";
import BasketIcon from "../../assets/svg/basket.svg";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Section = styled(Layout.Header)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76px;
  background-color: #189078;
  color: #ffffff;
  padding: 0 100px;
  @media screen and (max-width: 992px) {
    padding: 0 30px;
  }
`;
const Div = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Header = () => {
  const basket = useAppSelector(getBasketItems);
  const [basketAmountString, setBasketAmountString] = useState<string>("");
  let location = useLocation();

  useEffect(() => {
    setBasketAmountString(calculateBasketAmount({ basket }));
  }, [basket]);
  return (
    <Section>
      <HeaderContainer>
        <Div>PLT-MP</Div>
        {location.pathname &&
        location.pathname.length > 0 &&
        location.pathname !== "/basket" ? (
          <HeaderBasket>
            <Link
              to={"/basket"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img src={BasketIcon} alt="" /> {basketAmountString}
            </Link>
          </HeaderBasket>
        ) : (
          ""
        )}
      </HeaderContainer>
    </Section>
  );
};

export default Header;
