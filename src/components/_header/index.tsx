import styled from "styled-components";
import * as tokens from "../../_tokens";

const Header = styled.header`
  display: grid;
  height: ${tokens.headerHeight}px;
  color: #000000;
  grid-template-columns: 0px 1fr;
  background-color: #ffffff;
  box-shadow: ${tokens.boxShadow};
  margin-bottom: ${tokens.headerHeight}px;
  align-items: center;
`;

export { Header };
