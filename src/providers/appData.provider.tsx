import React, { useEffect, useState } from "react";
import { getAllAppData } from "../services/allAppData";
import { ErrorHandler } from "../services/errorHandler";
import {
  AppDataContextProps,
  DataContext,
} from "./appData.context";

enum RequestStatuses {
  INITIAL = "INITIAL",
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
}

interface RequestState {
  status: RequestStatuses;
  documentId: string | null;
}

interface DataProviderProps {
  documentId: string;
}

const DataProvider: React.FC<DataProviderProps> = ({
  documentId,
  children,
}) => {
  const [dataRequestStatus, setDataRequestStatus] = useState<RequestState>({
    status: RequestStatuses.INITIAL,
    documentId,
  });
  const [appData, setAppData] =
    useState<AppDataContextProps["appData"]>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const isLoading =
    dataRequestStatus.documentId !== documentId ||
    (dataRequestStatus.status !== RequestStatuses.COMPLETE &&
      dataRequestStatus.status !== RequestStatuses.ERROR);

  const hasError =
    dataRequestStatus.documentId === documentId &&
    dataRequestStatus.status === RequestStatuses.ERROR;
  const noData = !!error?.message.match("No data found")?.length;
  useEffect(() => {
    setDataRequestStatus({ status: RequestStatuses.INITIAL, documentId });
  }, [documentId]);

  useEffect(() => {
    const dataNeedsRequesting =
      dataRequestStatus.status === RequestStatuses.INITIAL;

    if (dataNeedsRequesting) {
      setDataRequestStatus({ status: RequestStatuses.PENDING, documentId });
      getAllAppData(documentId)
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
    documentId,
    isLoading,
    hasError,
    noData,
    error,
    appData,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export { DataProvider };
