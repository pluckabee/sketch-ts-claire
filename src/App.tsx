import React from "react";
import DocumentRoute from "./components/documentRoute";
import { DataProvider } from "./providers/appData.provider";
import { matchPath, useLocation } from "react-router-dom";
import NoDataView from "./components/documentChooserView";

function App() {
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

  // This isn't as extensible as I'd like it to be
  // I preferred here to dependency inject in the Ids rather than use a router dependency inside the Provider or have yet another component to ferry through the data
  if (documentPath?.params?.documentId) {
    return (
      <DataProvider
        documentId={documentPath.params.documentId}
        artboardId={artBoardId ? decodeURI(artBoardId) : undefined}
      >
        <DocumentRoute />
      </DataProvider>
    );
  }

  return <NoDataView />;
}

export default App;
