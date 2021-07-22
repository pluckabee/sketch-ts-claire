
export enum RequestStatuses {
  INITIAL = "INITIAL",
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
}

export type SketchArtboardImage = {
  height: number;
  url: string;
  width: number;
};

export interface SketchArtboard {
  thumbnail: SketchArtboardImage;
  artboardName: string;
  artboardIndex: number
  file: SketchArtboardImage;
}

export interface SketchDocument {
  documentName: string;
  documentId: string;
  artboards: SketchArtboard[];
}

export interface RawSketchArtboard {
    name: string;
    isArtBoard: boolean;
    files: {
        height: number;
        url: string;
        width: number;
        scale: number;
        thumbnails: {
          height: number;
          url: string;
          width: number;
        }[];
    }[]
  }
  
  export interface getDocumentDataRawResponse {
    data:{
      share: {
        identifier: string;
        version: {
          document: {
            name: string
            artboards: {
              entries: RawSketchArtboard[];
            };
          };
        };
      }
    }
  }