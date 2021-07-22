import React from "react";

import { DocumentView } from "../components/DocumentView";
import { ArtboardView } from "../components/ArtboardView";
import { DocumentChooserView } from "../components/DocumentChooserView";
import { useAppDataContext } from "../providers/DocumentData.context";
import { Switch, Route } from "react-router-dom";
import Loader from "../components/Loader";

interface DocumentRouteProps {
  artboardId?: string;
}
const DocumentRoute: React.FC<DocumentRouteProps> = () => {
  const { documentId, dataRequestStatus, isLoading, hasError } =
    useAppDataContext();
  if (isLoading || documentId !== dataRequestStatus.documentId) {
    return <Loader />;
  }

  if (hasError) {
    return (
      <DocumentChooserView withError={true} erroredDocumentId={documentId} />
    );
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

export { DocumentRoute };
