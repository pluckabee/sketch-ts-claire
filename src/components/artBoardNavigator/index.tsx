import React from "react";
import { SketchArtboard, SketchDocument } from "../../typeInterfaces";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { Link} from "react-router-dom";

type ArtboardViewProps = {
  currentArtboard: SketchArtboard;
  document: SketchDocument;
};



export const getLink = (index: number, document: SketchDocument ) => {

    console.log(document.artboards.length)
    if(index >= 0 && index <= (document.artboards.length -1)) {
        return `/document/${document.documentId}/art-board/${document.artboards[index].artboardName}`
    }
    return '#'
}

export const getBackLink = (index: number, document: SketchDocument )=> {
    return getLink(index -1, document)

}

export const getForwardLink = (index: number, document: SketchDocument )=> {
    return getLink(index +1, document)

}
const ArtboardNavigator: React.FC<ArtboardViewProps> = ({
  currentArtboard,
  document,
}) => {
  return (
    <>
      <Link to={`/document/${document.documentId}`}><Close /></Link>
      <Link to={getBackLink(currentArtboard.artboardIndex, document)}><ArrowLeft /></Link>
      {currentArtboard.artboardIndex + 1}
      <span>/</span>
      {document.artboards.length}
      <Link to={getForwardLink(currentArtboard.artboardIndex, document)}><ArrowRight /></Link>
      <span>{currentArtboard.artboardName}</span>
    </>
  );
};

export default ArtboardNavigator;