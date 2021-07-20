import { getBackLink, getForwardLink } from "./index";
import { SketchArtboard, SketchDocument } from "../../typeInterfaces";

describe("Get Arrow Link Navigation Helper", () => {
  const mockArtboard0 = {
    artboardIndex: 0,
    artboardName: "mockArtboard0",
  } as SketchArtboard;
  const mockArtboard1 = {
    artboardIndex: 1,
    artboardName: "mockArtboard1",
  } as SketchArtboard;
  const mockArtboard2 = {
    artboardIndex: 2,
    artboardName: "mock Art board 2",
  } as SketchArtboard;

  const mockDocument = {
    documentId: "mockDocumentId",
    artboards: [mockArtboard0, mockArtboard1, mockArtboard2],
  } as SketchDocument;

  it("returns an anchor link if we cant go further back", () => {
    const mockCurrentArtboard = mockArtboard0;

    const result = getBackLink(mockCurrentArtboard.artboardIndex, mockDocument);

    expect(result).toEqual("#");
  });

  it("returns the previous link", () => {
    const mockCurrentArtboard = mockArtboard1;

    const result = getBackLink(mockCurrentArtboard.artboardIndex, mockDocument);

    expect(result).toMatch(encodeURI(mockArtboard0.artboardName));
  });


  it("returns an anchor link if we cant go further forward", () => {
    const mockCurrentArtboard = mockArtboard2;

    const result = getForwardLink(mockCurrentArtboard.artboardIndex, mockDocument);

    expect(result).toEqual("#");
  });

  it("returns the next link", () => {
    const mockCurrentArtboard = mockArtboard1;

    const result = getForwardLink(mockCurrentArtboard.artboardIndex, mockDocument);

    expect(result).toMatch(encodeURI(mockArtboard2.artboardName));
  });


});
