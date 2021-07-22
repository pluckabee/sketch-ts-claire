import React from "react";
import { SketchArtboard, SketchDocument } from "../types";
import {
  getBackLink,
  getForwardLink,
} from "../helpers/navigation/navigationHelpers";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

import { ReactComponent as Breadcrumb } from "../assets/breadcrumb.svg";
import { useHistory } from "react-router-dom";
import { NavigationContainer } from "./_styled/navigationContainer";
import { NavigationArrow } from "./_styled/navigationArrow";

type ArtboardViewProps = {
  currentArtboard: SketchArtboard;
  sketchDocument: SketchDocument;
};

const ArtboardNavigator: React.FC<ArtboardViewProps> = ({
  currentArtboard,
  sketchDocument,
}) => {
  const history = useHistory();
  const currentPage = currentArtboard.artboardIndex + 1;
  const totalPages = sketchDocument.artboards.length;
  const backLink = getBackLink(currentArtboard.artboardIndex, sketchDocument);
  const forwardLink = getForwardLink(
    currentArtboard.artboardIndex,
    sketchDocument
  );
  return (
    <NavigationContainer>
      <NavigationArrow
        aria-label={backLink ? "Go to Previous Page" : "Cannot go further back"}
        onClick={() => {
          if (backLink) {
            history.push(backLink);
          }
        }}
        disabled={backLink === undefined}
      >
        <ArrowLeft />
      </NavigationArrow>
      <span aria-label={`Current page is Page ${currentPage} of ${totalPages}`}>
        {currentPage}
      </span>
      <Breadcrumb />
      <span aria-label={`Total pages: ${totalPages}`}>{totalPages}</span>
      <NavigationArrow
        onClick={() => {
          if (forwardLink) history.push(forwardLink);
        }}
        aria-label={
          forwardLink ? "Go to Next Page" : "Cannot go further forward"
        }
        disabled={forwardLink === undefined}
      >
        <ArrowRight />
      </NavigationArrow>
    </NavigationContainer>
  );
};

export { ArtboardNavigator };
