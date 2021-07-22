import styled from "styled-components";
import * as tokens from "../../_tokens"

const ArtBoard = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    padding: 1rem;
    max-width:100%;
    min-width: ${tokens.minScreenSize - tokens.baseSpacing}px;
    height:auto;
  }
`;

export { ArtBoard };
