import React from "react";
import { Link } from "react-router-dom";
import { ArtboardList } from "../_artboardList";
import { Thumbnail, ThumbnailImg, ThumbnailTitle } from "../_artboardThumbnail";
import { Main } from "../_main";
import { useAppDataContext } from "../../providers/DocumentData.context";
import { DocumentChooserView } from "../DocumentChooserView";
import { MainHeading } from "../MainHeading";

const DocumentView: React.FC = () => {
  const { sketchDocument } = useAppDataContext();
  if (sketchDocument) {
    return (
      <Main>
        <MainHeading>{sketchDocument.documentName}</MainHeading>
        <ArtboardList>
          {sketchDocument.artboards.map((artboard) => (
            <Thumbnail key={artboard.artboardName}>
              <Link
                to={`/document/${
                  sketchDocument.documentId
                }/art-board/${encodeURI(artboard.artboardName)}`}
              >
                <ThumbnailImg
                  src={artboard.thumbnail.url}
                  alt={`thumbnail for ${artboard.artboardName}`}
                ></ThumbnailImg>
                <ThumbnailTitle>{artboard.artboardName}</ThumbnailTitle>
              </Link>
            </Thumbnail>
          ))}
        </ArtboardList>
      </Main>
    );
  }
  // For Bad document/artboard Ids
  return <DocumentChooserView />;
};

export { DocumentView };
