import React from "react";
import { SketchArtboard, SketchDocument } from "../../typeInterfaces";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as Separator } from "../../assets/separator.svg";
import { ReactComponent as Breadcrumb } from "../../assets/breadcrumb.svg";
import { useHistory } from "react-router-dom";
import { Navigation, NavArrow, CloseButton } from "../_navigation";

type ArtboardViewProps = {
  currentArtboard: SketchArtboard;
  sketchDocument: SketchDocument;
};

export const getLink = (index: number, sketchDocument: SketchDocument) => {
  if (index >= 0 && index <= sketchDocument.artboards.length - 1) {
    return `/document/${sketchDocument.documentId}/art-board/${encodeURI(
      sketchDocument.artboards[index].artboardName
    )}`;
  }
};

export const getBackLink = (index: number, document: SketchDocument) => {
  return getLink(index - 1, document);
};

export const getForwardLink = (index: number, document: SketchDocument) => {
  return getLink(index + 1, document);
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
    <Navigation>
      <CloseButton
        aria-label={"Go back to Document View"}
        onClick={() => {
          history.push(`/document/${sketchDocument.documentId}`);
        }}
      >
        <Close />
      </CloseButton>
      <Separator />
      <NavArrow
        aria-label={backLink ? "Go to Previous Page" : "Cannot go further back"}
        onClick={() => {
          if (backLink) {
            history.push(backLink);
          }
        }}
        disabled={backLink === undefined}
      >
        <ArrowLeft />
      </NavArrow>
      <span aria-label={`Current page is Page ${currentPage} of ${totalPages}`}>
        {currentPage}
      </span>
      <Breadcrumb />
      <span aria-label={`Total pages: ${totalPages}`}>{totalPages}</span>
      <NavArrow
        onClick={() => {
          if (forwardLink) history.push(forwardLink);
        }}
        aria-label={
          forwardLink ? "Go to Next Page" : "Cannot go further forward"
        }
        disabled={forwardLink === undefined}
      >
        <ArrowRight />
      </NavArrow>
    </Navigation>
  );
};

export default ArtboardNavigator;
