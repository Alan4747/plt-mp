import styled from "styled-components";

const HeaderBasket = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11%;
  max-width: 12%;
  background-color: #12735f;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default HeaderBasket;
