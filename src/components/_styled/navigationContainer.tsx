import styled from "styled-components";

const NavigationContainer = styled.nav`
  z-index: 99;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(
      5,
      1rem
    );
  color: #00000050;
`;

export { NavigationContainer };
