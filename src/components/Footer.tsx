import { Layout } from "antd";
import styled from "styled-components";

const Wrappper = styled(Layout.Footer)`
  width: 100%;
  background-color: unset;
  margin-top: 100px;
  text-align: center;
`;

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return <Wrappper> ©{thisYear} Erkin A • Case</Wrappper>;
};
export default Footer;
