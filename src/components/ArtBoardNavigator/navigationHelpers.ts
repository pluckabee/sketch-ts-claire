import { SketchDocument } from "../../typeInterfaces";

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
