import styled from "styled-components";
import BasketList from "./BasketList";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 !important;
  border-radius: 2px;
`;
const BasketContainer = () => (
  <Wrapper>
    <BasketList />
  </Wrapper>
);

export default BasketContainer;
