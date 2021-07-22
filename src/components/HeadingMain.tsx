import React from "react";
import { Header } from "./_header";
import { Heading } from "./_heading";
import { Logo } from "./_logo";
const HeadingMain: React.FC = ({ children }) => {
  return (
    <Header>
      <Logo
        href="/document"
        role="img"
        aria-label="The Sketch Logo: An orange Diamond"
      ></Logo>
      <Heading>{children}</Heading>
    </Header>
  );
};

export { HeadingMain };
