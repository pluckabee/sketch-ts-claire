import { createContext, useContext } from "react";

import {
  SketchDocument,
  SketchArtboard,
  RequestStatuses,
} from "../types";

export interface AppDataContextProps {
  dataRequestStatus: {
    documentId: string;
    status: RequestStatuses;
  };
  hasError: boolean;
  currentArtboard?: SketchArtboard;
  currentArtboardId?: string;
  error?: Error;
  isLoading: boolean;
  sketchDocument?: SketchDocument;
  documentId: string;
}

export const DataContext = createContext<AppDataContextProps>({
  dataRequestStatus: {
    documentId: "",
    status: RequestStatuses.INITIAL,
  },
  documentId: "",
  currentArtboardId: "",
  hasError: false,
  error: undefined,
  isLoading: true,
  sketchDocument: undefined,
  currentArtboard: undefined,
});

export const useAppDataContext = () => useContext(DataContext);
