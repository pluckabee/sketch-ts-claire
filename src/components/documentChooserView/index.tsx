import React, { useState } from "react";
import { Main } from "../_main";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MainHeading } from "../MainHeading";
import { SubmitButton } from "../_submitButton";

const NewDocumentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 32px;
}
`;

const DocumentIdInput = styled.input`
  width: 245px;
  padding: 16px 32px;
`;

const ErrorMessage = styled.div`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

interface DocumentChooserViewProps {
  withError?: boolean;
  erroredDocumentId?: string;
}

const DocumentChooserView: React.FC<DocumentChooserViewProps> = ({
  withError,
  erroredDocumentId,
}) => {
  const defaultDocumentId = "e981971c-ff57-46dc-a932-a60dc1804992";
  const history = useHistory();

  const [documentId, setDocumentId] = useState<string>(defaultDocumentId);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/document/${documentId}`);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDocumentId(event.currentTarget.value);
  };

  return (
    <Main>
      <MainHeading>Go to Document</MainHeading>
      {withError && (
        <ErrorMessage>{`An error occurred with Document Id: ${erroredDocumentId}, try a new document`}</ErrorMessage>
      )}
      <NewDocumentForm onSubmit={handleSubmit}>
        <label>Document Guid:</label>
        <DocumentIdInput
          type="text"
          value={documentId}
          onChange={handleChange}
        />
        <SubmitButton type="submit" value="Submit">
          Go to Document
        </SubmitButton>
      </NewDocumentForm>
    </Main>
  );
};
export { DocumentChooserView };
