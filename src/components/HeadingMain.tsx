import React from "react";
import { Header } from "./_styled/baseHeader";
import { Heading } from "./_styled/baseHeaderHeading";
import { Logo } from "./_styled/baseHeaderLogo";
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
