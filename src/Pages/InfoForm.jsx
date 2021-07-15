import { useState } from 'react';
import styled from 'styled-components';
import FormPageOne from '../components/Form Pages/FormPageOne';
import FormPageThree from '../components/Form Pages/FormPageThree';
import FormPageTwo from '../components/Form Pages/FormPageTwo';

export default function InfoPage({pageNumber, setPageNumber}) {
  let [data, setData] = useState([]);

  const submit = (values) => {
    setData([...data, values]);
    if (pageNumber >= 4) return;
    setPageNumber((pageNumber = pageNumber + 1));
  };

  return (
    <InfoPageContainer>
      <FormContainer>
        {pageNumber === 1 && <FormPageOne onSubmit={submit} pageNumber={pageNumber} />}
        {pageNumber === 2 && <FormPageTwo onSubmit={submit} pageNumber={pageNumber} />}
        {pageNumber === 3 && <FormPageThree onSubmit={submit} pageNumber={pageNumber} />}
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
  margin-left: 250px;
  display: flex;
  flex-direction: column;
`;
