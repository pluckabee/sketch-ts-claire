import React, { useEffect, useState } from "react";
import { getDocumentData } from "../services/DocumentService/DocumentService";
import { ErrorHandler } from "../components/ErrorHandler";

import {
  RequestStatuses,
} from "../types";
import {
  AppDataContextProps,
  DataContext,
} from "./DocumentData.context";

interface DataProviderProps {
  documentId: string;
  artboardId?: string;
}

const DataProvider: React.FC<DataProviderProps> = ({
  documentId,
  artboardId,
  children,
}) => {
  const [dataRequestStatus, setDataRequestStatus] = useState<AppDataContextProps['dataRequestStatus']>({
    status: RequestStatuses.INITIAL,
    documentId,
  });
  const [sketchDocument, setAppData] =
    useState<AppDataContextProps["sketchDocument"]>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const isLoading =
    dataRequestStatus.documentId !== documentId ||
    (dataRequestStatus.status !== RequestStatuses.COMPLETE &&
      dataRequestStatus.status !== RequestStatuses.ERROR);

  const hasError =
    dataRequestStatus.documentId === documentId &&
    dataRequestStatus.status === RequestStatuses.ERROR;

  
  useEffect(() => {
    setDataRequestStatus({ status: RequestStatuses.INITIAL, documentId });
  }, [documentId]);

  const currentArtboard = sketchDocument?.artboards.find(
    (board) => board.artboardName === artboardId
  );

  useEffect(() => {
    const dataNeedsRequesting =
      dataRequestStatus.status === RequestStatuses.INITIAL;

    if (dataNeedsRequesting) {
      setDataRequestStatus({ status: RequestStatuses.PENDING, documentId });
      getDocumentData(documentId)
        .then((response) => {
          setAppData(response);
          setDataRequestStatus({
            status: RequestStatuses.COMPLETE,
            documentId,
          });
        })
        .catch((e) => {
          setDataRequestStatus({ status: RequestStatuses.ERROR, documentId });
          setError(e);
          ErrorHandler(e);
        });
    }
  }, [dataRequestStatus, documentId]);

  const context: AppDataContextProps = {
    dataRequestStatus,
    documentId,
    currentArtboard,
    currentArtboardId: artboardId,
    isLoading,
    hasError,
    error,
    sketchDocument,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export { DataProvider };
