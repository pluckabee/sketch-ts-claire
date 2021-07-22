import React from "react";
import { DocumentRoute } from "./DocumentRoute";
import { DataProvider } from "../providers/DocumentData.provider";
import { Switch, Route, matchPath, useLocation } from "react-router-dom";
import { DocumentChooserView } from "../components/DocumentChooserView";
import Loader from "../components/Loader";

const MainRoute: React.FC = () => {
  const { pathname } = useLocation();

  const documentPath = matchPath(pathname, {
    path: "/document/:documentId",
    exact: false,
    strict: false,
  }) as any;

  const artboardPath = matchPath(pathname, {
    path: "/document/:documentId/art-board/:artboardName",
    exact: false,
    strict: false,
  }) as any;

  const artBoardId = artboardPath?.params?.artboardName;
  const documentId = documentPath?.params?.documentId;
  return (
    <Switch>
      <Route path="/document/:documentId/">
        <DataProvider
          documentId={documentId}
          artboardId={artBoardId ? decodeURI(artBoardId) : undefined}
        >
          <DocumentRoute />
        </DataProvider>
      </Route>
      <Route path="/loading">
        <Loader />;
      </Route>
      <Route path="/">
        <DocumentChooserView />;
      </Route>
    </Switch>
  );
};

export { MainRoute };
