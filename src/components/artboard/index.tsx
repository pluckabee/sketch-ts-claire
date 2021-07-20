import React from "react";
import { SketchArtboard } from "../../typeInterfaces";

type ArtboardViewProps = {
  artboard: SketchArtboard;
};

const ArtboardView: React.FC<ArtboardViewProps> = ({ artboard }) => {
  return (
    <main>
      <img
        src={artboard.file.url}
        alt={`artboard file ${artboard.artboardName}`}
      ></img>
    </main>
  );
};

export default ArtboardView;
