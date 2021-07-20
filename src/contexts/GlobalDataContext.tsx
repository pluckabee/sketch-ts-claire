import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllAppData } from "../services/allAppData";
import { SketchDocument } from "../typeInterfaces";
import { ErrorHandler } from "../services/errorHandler";

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

interface AppDataContext {
  hasError: boolean;
  error?: Error;
  isLoading: boolean;
  noData: boolean;
  appData?: SketchDocument;
  documentId: string | null;
}
const DataContext = createContext<AppDataContext>({
  documentId: null,
  noData: false,
  hasError: false,
  error: undefined,
  isLoading: true,
  appData: undefined,
});

const useAppDataContext = () => useContext(DataContext);

const DataProvider: React.FC<DataProviderProps> = ({
  documentId,
  children,
}) => {
  const [dataRequestStatus, setDataRequestStatus] = useState<RequestState>({
    status: RequestStatuses.INITIAL,
    documentId,
  });
  const [appData, setAppData] = useState<AppDataContext["appData"]>(undefined);
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
          console.log(response);
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
          console.log(e.message);
        });
    }
  }, [dataRequestStatus, documentId]);

  const context: AppDataContext = {
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

export { DataProvider, useAppDataContext };
