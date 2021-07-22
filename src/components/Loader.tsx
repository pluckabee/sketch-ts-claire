import React from "react";
import { ReactComponent as Logo } from "../assets/sketch-logo.svg";
import styled, { keyframes } from "styled-components";

const pointUpDown = keyframes`
0% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
}

100% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
}
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const LoadingText = styled.div`
  color: #00000080;
  padding-top: 0.5em;
`;
const Loading = styled.div`
  animation: ${pointUpDown} 1s linear infinite alternate;
`;

const Loader: React.FC = () => {
  return (
    <LoadingContainer>
      <Loading>
        <Logo />
      </Loading>
      <LoadingText>Loading</LoadingText>
    </LoadingContainer>
  );
};

export default Loader;
