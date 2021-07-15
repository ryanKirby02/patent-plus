import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FormPageOne from '../components/Form Pages/FormPageOne';
import FormPageThree from '../components/Form Pages/FormPageThree';
import FormPageTwo from '../components/Form Pages/FormPageTwo';

import { formStepOne, submitStep2 } from '../actions/FormActions';

export default function InfoPage({ pageNumber, setPageNumber }) {
  const dispatch = useDispatch();

  const submitStepOne = async (values) => {
    const { firstName, middleName, lastName, title } = values;
    await dispatch(formStepOne(firstName, middleName, lastName, title));
    setPageNumber((pageNumber = pageNumber + 1));
  };

  const submitStepTwo = async (values) => {
    console.log(values)
    const { invenName, category } = values;
    await dispatch(submitStep2(invenName, category));
    setPageNumber((pageNumber = pageNumber + 1));
  }

  return (
    <InfoPageContainer>
      <FormContainer>
        {pageNumber === 1 && <FormPageOne onSubmit={submitStepOne} pageNumber={pageNumber} />}
        {pageNumber === 2 && <FormPageTwo onSubmit={submitStepTwo} pageNumber={pageNumber} />}
        {pageNumber === 3 && <FormPageThree pageNumber={pageNumber} />}
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
