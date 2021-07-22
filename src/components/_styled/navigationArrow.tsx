import styled from "styled-components";

const NavigationArrow = styled.button`
  height: 100%;
  width: 100%;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => (props.disabled ? "#00000020" : "inherit")};
`;

export { NavigationArrow };
