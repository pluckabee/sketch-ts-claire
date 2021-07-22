import styled from "styled-components";
import * as tokens from "../../_tokens";

const ViewSingle = styled.div`
  display: flex;
  justify-content: center;

  img {
    padding: 1rem;
    width: auto;
    max-width: calc(100vw - ${tokens.baseSpacing}px);
    min-width: ${tokens.minScreenSize - tokens.baseSpacing}px;
    max-height: calc(
      100vh - ${tokens.headerHeight}px - ${tokens.baseSpacing * 4}px
    );
  }
`;

export { ViewSingle };
