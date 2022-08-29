import { useLocation } from "react-router-dom";
import styled from "styled-components";

type Props = {
  name: string;
};
const Name = styled.div`
  color: #191919;
  font-size: 13px;
  font-weight: 600;
  height: auto;
  margin-bottom: 10px;
  min-height: 40px;
`;

const characterLimit = 30;
const ProductName: React.FC<Props> = ({ name }) => {
  let location = useLocation();

  return (
    <>
      {location.pathname &&
      location.pathname.length > 0 &&
      location.pathname !== "/basket" ? (
        <Name>
          {name.length > characterLimit
            ? name.slice(name.length - characterLimit - 3) + "..."
            : name}
        </Name>
      ) : (
        <Name>{name}</Name>
      )}
    </>
  );
};

export default ProductName;
