import React from "react";
import DocumentRoute from './components/documentRoute'
import { DataProvider } from './providers/appData.provider'
import { Link, matchPath, useLocation } from 'react-router-dom'


function App() {
const { pathname } = useLocation()

const documentPath = matchPath(pathname, {
  path: "/document/:documentId",
  exact: false,
  strict: false
}) as any

const artboardPath = matchPath(pathname, {
  path: "/document/:documentId/art-board/:artboardName",
  exact: false,
  strict: false,
}) as any;

const artBoardId = decodeURI(artboardPath?.params?.artboardName);

if(documentPath?.params?.documentId) {
  return (
        <DataProvider documentId={documentPath.params.documentId}>
          <DocumentRoute artboardId={artBoardId}/>
        </DataProvider>
  );
}

return <div>no document found, use default? <Link to="/document/e981971c-ff57-46dc-a932-a60dc1804992">Go to default Document</Link></div>
}

export default App;
