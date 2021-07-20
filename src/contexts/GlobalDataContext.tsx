import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllAppData, SketchDocument } from "../services/allAppData";
import { ErrorHandler} from "../services/errorHandler"
import { noop } from 'lodash-es'

enum RequestStatuses {
  INITIAL = "INITIAL",
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
}

interface AppDataContext {
  requestStatus: RequestStatuses;
  invalidateCurrentData: () => void
  isLoading: boolean;
  appData: SketchDocument | undefined;
}
const DataContext = createContext<AppDataContext>({
  requestStatus: RequestStatuses.INITIAL,
  isLoading: true,
  invalidateCurrentData: noop,
  appData: undefined,
});

const useAppDataContext = () => useContext(DataContext);

const DataProvider: React.FC = ({ children }) => {
  const [dataRequestStatus, setDataRequestStatus] = useState<RequestStatuses>(
    RequestStatuses.INITIAL
  );
  const [appData, setAppData] = useState<AppDataContext["appData"]>(undefined);

  const isLoading =
    dataRequestStatus !== RequestStatuses.COMPLETE &&
    dataRequestStatus !== RequestStatuses.ERROR;


  useEffect(() => {
    const dataNeedsRequesting = dataRequestStatus === RequestStatuses.INITIAL;

    if (dataNeedsRequesting) {
      setDataRequestStatus(RequestStatuses.PENDING);
      getAllAppData.then((response) => {
        setAppData(response.data.share.version.document);
        setDataRequestStatus(RequestStatuses.COMPLETE)
      }).catch((e) => {
        setDataRequestStatus(RequestStatuses.ERROR)
        ErrorHandler(e)
      });
    }
  }, [dataRequestStatus]);

  const context: AppDataContext = {
    requestStatus: dataRequestStatus,
    invalidateCurrentData: () => setDataRequestStatus(RequestStatuses.INITIAL),
    isLoading,
    appData,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export { DataProvider, useAppDataContext };
