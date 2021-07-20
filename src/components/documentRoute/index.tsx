import React from "react";
import ArtboardNavigator from "../artBoardNavigator"
import DocumentList from "../documentList";
import Artboard from "../artboard";
import { useAppDataContext } from "../../contexts/GlobalDataContext";

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
      <Artboard artboard={currentArtboard} />
      </>
    }

    return <DocumentList document={appData} />;
  }

  // this should never happen
  return null;
}

export default DocumentRoute;
