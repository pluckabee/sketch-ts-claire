import React from "react";
import ArtboardNavigator from "../components/artBoardNavigator"
import DocumentView from "../components/documentView";
import ArtboardView from "../components/artboardView";
import { useAppDataContext } from "../contexts/GlobalDataContext";

interface DocumentRouteProps {
  artboardId?: string 
}
const DocumentRoute: React.FC<DocumentRouteProps> = ({artboardId}) => {
  const { documentId, noData, appData, isLoading, hasError } = useAppDataContext();
  if (isLoading || documentId !== appData?.documentId) {
    return <div>Loading ...</div>;
  }

  if(noData) {
    return <div>No data found for document: {documentId}</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  if (appData) {
    const currentArtboard = appData.artboards.find(
      (board) => board.artboardName === artboardId
    );
    if (currentArtboard) {
      return <>
      <ArtboardNavigator currentArtboard={currentArtboard} document={appData} />
      <ArtboardView artboard={currentArtboard} />
      </>
    }

    return <DocumentView document={appData} />;
  }

  // this should never happen
  return null;
}

export default DocumentRoute;
