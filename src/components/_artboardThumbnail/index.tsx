import styled from "styled-components";
import * as tokens from "../../_tokens";

const Thumbnail = styled.div`
  padding: ${tokens.baseSpacing}px;
  a {
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: end;
    text-decoration: none;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    color: #7b7b7b;
    border-radius: 0.25rem;
    &:hover {
      font-weight: bold;
      color: #000000;
      box-shadow: ${tokens.boxShadow}
  }
`;

const ThumbnailImg = styled.img`
  align-self: center;
  padding: 1rem;
  padding-bottom: 0px;
`;

const ThumbnailTitle = styled.div`
  align-self: end;
  padding-bottom: 1rem;
`;

export { Thumbnail, ThumbnailImg, ThumbnailTitle };
