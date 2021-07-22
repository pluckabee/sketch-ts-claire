import styled from "styled-components";
import { baseHeaderStyles } from "./baseHeader";
const NavigationHeader = styled.header`
  ${baseHeaderStyles}

  grid-template-columns: 60px 0.5rem  4rem 1fr;
  > * {
  &:last-child {
    margin-left: -4.75rem;
    @media only screen and (max-width: 450px) {

      justify-self: end;
      padding-right: 1em

    }
  
  }
}
`;

export { NavigationHeader };
