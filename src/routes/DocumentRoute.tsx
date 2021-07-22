import React from "react";

import { DocumentView } from "../components/DocumentView";
import { ArtboardView } from "../components/ArtboardView/ArtboadView";
import { DocumentChooserView } from "../components/DocumentChooserView";
import { useAppDataContext } from "../providers/DocumentData.context";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../components/Loader";

interface DocumentRouteProps {
  artboardId?: string;
}
const DocumentRoute: React.FC<DocumentRouteProps> = () => {
  const { documentId, dataRequestStatus, noData, isLoading, hasError } =
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
      {noData && <Redirect to="/document" />}
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
