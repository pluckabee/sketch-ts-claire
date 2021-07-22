import React from "react";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Separator } from "../assets/separator.svg";
import { NavigationHeader } from "./_styled/navigationHeader";
import { Heading } from "./_styled/baseHeaderHeading";
import { BaseMain } from "./_styled/baseMain";
import { ViewSingle } from "./_styled/viewSingle";
import { ArtboardNavigator } from "./ArtboardNavigator";
import { useAppDataContext } from "../providers/DocumentData.context";
import { DocumentChooserView } from "./DocumentChooserView";
import { CloseButton } from "./_styled/baseClose";
import { useHistory } from "react-router-dom";

const ArtboardView: React.FC = () => {
  const history = useHistory();
  const { sketchDocument, currentArtboard } = useAppDataContext();

  if (sketchDocument && currentArtboard) {
    return (
      <BaseMain>
        <NavigationHeader>
          <CloseButton
            aria-label={"Go back to Document View"}
            onClick={() => {
              history.push(`/document/${sketchDocument.documentId}`);
            }}
          >
            <Close />
          </CloseButton>
          <Separator />
          <ArtboardNavigator
            currentArtboard={currentArtboard}
            sketchDocument={sketchDocument}
          />
          <Heading>{currentArtboard.artboardName}</Heading>
        </NavigationHeader>
        <ViewSingle>
          <img
            src={currentArtboard.file.url}
            alt={`artboard file ${currentArtboard.artboardName}`}
          />
        </ViewSingle>
      </BaseMain>
    );
  }
  // For Bad document/artboard Ids
  return <DocumentChooserView />;
};

export { ArtboardView };
