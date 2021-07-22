import styled from "styled-components";
import * as tokens from "../../_tokens";
const Navigation = styled.nav`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: ${tokens.headerHeight}px 0.5rem repeat(
      5,
      1rem
    );
  color: #00000050;
`;

const NavArrow = styled.button`
height: 100%;
width: 100%;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => (props.disabled ? "#00000020" : "inherit")};
`;

const CloseButton = styled.button`
height: 100%;
width: 100%;
`;


export { Navigation, NavArrow, CloseButton };
