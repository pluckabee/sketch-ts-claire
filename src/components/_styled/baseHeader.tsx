import styled, { css } from "styled-components";
import * as tokens from "../../_tokens";

const baseHeaderStyles = css`
  display: grid;
  height: ${tokens.headerHeight}px;
  color: #000000;
  background-color: #ffffff;
  box-shadow: ${tokens.boxShadow};
  align-items: center;

  /* fixed margin bottom for artboard height calc*/
  margin-bottom: ${tokens.baseSpacing * 2}px;
`;
const Header = styled.header`
  ${baseHeaderStyles}
  grid-template-columns: 0px 1fr;

`;

export { Header, baseHeaderStyles };
