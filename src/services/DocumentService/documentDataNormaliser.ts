import {
  getDocumentDataRawResponse,
  RawSketchArtboard,
  SketchDocument,
  SketchArtboardImage,
} from "../../types";
import { omit, sortBy } from "lodash-es";

const getThumbnail = (artboard: RawSketchArtboard): SketchArtboardImage => {
  const thumbnailFile = artboard.files.filter((file) => file.scale === 1);

  // This is just to failsafe in case for some reason we don't get a thumbnail
  const thumbnailToUse = thumbnailFile.length
    ? thumbnailFile[0].thumbnails[0]
    : artboard.files[0].thumbnails[0];
  return thumbnailToUse;
};

const getFile = (artboard: RawSketchArtboard): SketchArtboardImage => {
  // using > 1 for now.
  // would need to check the data to see if this is always 2 and change to use === 2
  const file = artboard.files.filter((file) => file.scale > 1);

  // This is just to failsafe in case for some reason we don't get a larger scaled image
  const fileToUse = file.length ? file[0] : artboard.files[0];
  return omit(fileToUse, ["thumbnails", "scale"]);
};

const dataNormaliser = (
  rawAppData: getDocumentDataRawResponse
): SketchDocument => {
  const rawDocument = rawAppData.data.share.version.document;
  const normalisedArtboards = sortBy(rawDocument.artboards.entries).map((artboard, index) => {
    return {
      artboardIndex: index,
      artboardName: artboard.name,
      thumbnail: getThumbnail(artboard),
      file: getFile(artboard),
    };
  });
  const normalisedDocument = {
    documentName: rawDocument.name,
    documentId: rawAppData.data.share.identifier,
    artboards: normalisedArtboards,
  };
  console.log("return norm doc", normalisedDocument);
  return normalisedDocument;
};

export { dataNormaliser };
