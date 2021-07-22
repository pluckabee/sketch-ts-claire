import React from "react";

import DocumentView from "../documentView";
import ArtboardView from "../artboardView";
import { useAppDataContext } from "../../providers/appData.context";
import { Switch, Route } from "react-router-dom";

interface DocumentRouteProps {
  artboardId?: string;
}
const DocumentRoute: React.FC<DocumentRouteProps> = () => {
  const {
    documentId,
    dataRequestStatus,
    noData,
    isLoading,
    hasError,
  } = useAppDataContext();
  if (isLoading || documentId !== dataRequestStatus.documentId) {
    return <div>Loading ...</div>;
  }

  if (noData) {
    return <div>No data found for document: {documentId}</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  return (
    <Switch>
      <Route exact path="/document/:documentId">
        <DocumentView />
      </Route>
      <Route path="/document/:documentId/art-board/:artBoardId">
        <ArtboardView />
      </Route>
    </Switch>
  );
};

export default DocumentRoute;
