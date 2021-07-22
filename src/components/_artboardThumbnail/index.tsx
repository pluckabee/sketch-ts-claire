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
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      font-weight: bold;
      color: #000000;
      box-shadow: ${tokens.boxShadow};
  }
`;

const ThumbnailImg = styled.img`
  align-self: center;
  padding-top: 1rem;
`;

const ThumbnailTitle = styled.div`
  align-self: end;
  transition: font-weight 0.3s ease-in-out;
  padding-bottom: 1rem;
`;

export { Thumbnail, ThumbnailImg, ThumbnailTitle };
