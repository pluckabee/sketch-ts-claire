import React from "react";
import { Header } from "./_header";
import { Heading } from "./_heading";
import { Main } from "./_main";
import { ArtBoard } from "./_artboard";
import { ArtboardNavigator } from "./ArtBoardNavigator";
import { useAppDataContext } from "../providers/DocumentData.context";
import { DocumentChooserView } from "./DocumentChooserView";

const ArtboardView: React.FC = () => {
  const { sketchDocument, currentArtboard } = useAppDataContext();

  if (sketchDocument && currentArtboard) {
    return (
      <Main>
        <Header>
          <ArtboardNavigator
            currentArtboard={currentArtboard}
            sketchDocument={sketchDocument}
          />
          <Heading>{currentArtboard.artboardName}</Heading>
        </Header>
        <ArtBoard>
          <img
            src={currentArtboard.file.url}
            alt={`artboard file ${currentArtboard.artboardName}`}
          />
        </ArtBoard>
      </Main>
    );
  }
  // For Bad document/artboard Ids
  return <DocumentChooserView />;
};

export { ArtboardView };