import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import {
  addItemToBasket,
  reduceItemFromBasket,
} from "../../features/basket/basketSlice";
import { ItemType } from "../../types/ItemType";
import Button from "../../components/Button";
import Counter from "./Counter";
import CounterButton from "./CounterButton";
import Minus from "./Minus";
import Plus from "./Plus";

type Props = {
  item: ItemType;
  basketCount: number;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BasketButtonGroup: React.FC<Props> = ({ item, basketCount }) => {
  const dispatch = useAppDispatch();
  return basketCount === 0 ? (
    <Button block onClick={() => dispatch(addItemToBasket(item))}>
      Add to cart
    </Button>
  ) : (
    <Wrapper>
      <CounterButton onClick={() => dispatch(reduceItemFromBasket(item))}>
        <Minus />
      </CounterButton>
      <Counter count={basketCount} />
      <CounterButton onClick={() => dispatch(addItemToBasket(item))}>
        <Plus />
      </CounterButton>
    </Wrapper>
  );
};

export default BasketButtonGroup;
