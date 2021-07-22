import styled from "styled-components";
import * as tokens from "../../_tokens";

const SubmitButton = styled.button`
  background-color: #fa6400;
  border-radius: 2px;
  padding: 16px 32px;
  color: #ffffff;
  &:hover {
    background-color: #fb8332;
    box-shadow: ${tokens.boxShadow};
  }
`;

export {SubmitButton}