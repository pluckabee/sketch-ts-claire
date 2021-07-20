import  { createContext, useContext } from "react";

import { SketchDocument } from "../typeInterfaces";



export interface AppDataContextProps {
    hasError: boolean;
    error?: Error;
    isLoading: boolean;
    noData: boolean;
    appData?: SketchDocument;
    documentId: string | null;
  }


export   const DataContext = createContext<AppDataContextProps>({
    documentId: null,
    noData: false,
    hasError: false,
    error: undefined,
    isLoading: true,
    appData: undefined,
  });
  


export const useAppDataContext = () => useContext(DataContext);
