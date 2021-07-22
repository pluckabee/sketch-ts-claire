import styled from "styled-components";
import logo from "../../assets/sketch-logo.svg";
import * as tokens from "../../_tokens";

const Logo = styled.a`
  width: ${tokens.headerHeight}px;
  height: ${tokens.headerHeight}px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${logo});
  position: relative;
  z-index: 2;
`;

export { Logo };
