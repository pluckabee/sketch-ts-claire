import axios from "axios";

type SketchImage = {
  height: number;
  url: string;
  width: number;
};

export type SketchArtboardThumbnail = SketchImage;

export interface SketchArtboardFile extends SketchImage {
  scale: number;
  thumbnails: SketchArtboardThumbnail[];
}

export interface SketchArtboard {
  name: string;
  isArtBoard: boolean;
  files: SketchArtboardFile[];
}

export interface SketchDocument {
  name: string;
  artboard: {
    entries: SketchArtboard[];
  };
}

export interface getAllAppDataResponse {
    share: {
      identifier: string;
      version: {
        document: SketchDocument;
      };
    };
}
const query = `
{
  share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
    identifier
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}`;

export const getAllAppData = axios.post<getAllAppDataResponse>(
  "https://graphql.sketch.cloud/api",
  {
    query,
  }
);
