import { useState } from 'react';
import styled from 'styled-components';
import FormPageOne from '../components/Form Pages/FormPageOne';
import InfoFormSideBar from '../components/InfoFormSideBar';
import FormNav from '../components/FormNav';
import FormPageTwo from '../components/Form Pages/FormPageTwo';

export default function InfoPage() {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <InfoPageContainer>
      <InfoFormSideBar />
      <FormContainer>
        {pageNumber === 1 && <FormPageOne />}
        {pageNumber === 2 && <FormPageTwo />}
        <FormNav setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </FormContainer>
    </InfoPageContainer>
  );
}

const InfoPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
`;

const FormContainer = styled.div`
  margin-left: 350px;
  display: flex;
  flex-direction: column;
`
