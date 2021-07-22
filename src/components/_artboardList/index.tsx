import styled from "styled-components";
import * as tokens from "../../_tokens"

const ArtboardList = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(${tokens.thumbnailWidth +  (tokens.baseSpacing * 2)}px, 1fr) );
  grid-gap: 2rem 1rem;
  padding: ${tokens.baseSpacing};
`;

export { ArtboardList };
