import { useState } from 'react';
import styled from 'styled-components';
import FormPageOne from '../components/Form Pages/FormPageOne';
import InfoFormSideBar from '../components/InfoFormSideBar';

export default function InfoPage() {

    const [pageNumber, setPageNumber] = useState(1);
  return (
    <InfoPageContainer>
      <InfoFormSideBar />
      <FormPageOne setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </InfoPageContainer>
  );
}

const InfoPageContainer = styled.div`
  width: 80%;
  display: flex;
  overflow-x: hidden;
  font-family: 'Lato', sans-serif;
`;
