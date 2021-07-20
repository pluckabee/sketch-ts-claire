import React from 'react';
import { SketchDocument } from "../../typeInterfaces";
import { Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/sketch-logo.svg'

type DocumentViewProps = {
    document: SketchDocument
}

const DocumentView: React.FC<DocumentViewProps> = ({document}) => {
  return (
      <>
      <header className="DocumentView-header">
          <Logo/>
          <div>{document.documentName}</div>
      </header>
      <main>
    {document.artboards.map(artboard => (
        <div key={artboard.artboardName}>
            <img src={artboard.thumbnail.url} alt={`thumbnail for ${artboard.artboardName}`}></img>
            <div><Link to={`/document/${document.documentId}/art-board/${encodeURI(artboard.artboardName)}`}>{artboard.artboardName}</Link></div>
        </div>
    )

    )}
      </main>
      </>
  );
}

export default DocumentView;
