import React from "react";
import { Link } from "react-router-dom";
import { ViewList } from "./_styled/viewList";
import { ThumbnailTile } from "./_styled/thumbnailTile";
import { ThumbnailImage } from "./_styled/thumbnailImage";
import { ThumbnailText } from "./_styled/thumbnailText";
import { BaseMain } from "./_styled/baseMain";
import { useAppDataContext } from "../providers/DocumentData.context";
import { DocumentChooserView } from "./DocumentChooserView";
import { HeadingMain } from "./HeadingMain";

const DocumentView: React.FC = () => {
  const { sketchDocument } = useAppDataContext();
  if (sketchDocument) {
    return (
      <BaseMain>
        <HeadingMain>{sketchDocument.documentName}</HeadingMain>
        <ViewList>
          {sketchDocument.artboards.map((artboard) => (
            <ThumbnailTile key={artboard.artboardName}>
              <Link
                to={`/document/${
                  sketchDocument.documentId
                }/art-board/${encodeURI(artboard.artboardName)}`}
              >
                <ThumbnailImage
                  src={artboard.thumbnail.url}
                  alt={`thumbnail for ${artboard.artboardName}`}
                ></ThumbnailImage>
                <ThumbnailText>{artboard.artboardName}</ThumbnailText>
              </Link>
            </ThumbnailTile>
          ))}
        </ViewList>
      </BaseMain>
    );
  }
  // For Bad document/artboard Ids
  return <DocumentChooserView />;
};

export { DocumentView };
