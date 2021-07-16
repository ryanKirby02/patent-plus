import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import FormPageOne from '../components/Form Pages/FormPageOne';
import FormPageThree from '../components/Form Pages/FormPageThree';
import FormPageTwo from '../components/Form Pages/FormPageTwo';

import { formStepOne, submitStep2, submitStepThree } from '../actions/FormActions';

const InfoPage = ({ pageNumber, setPageNumber, history }) => {
  const dispatch = useDispatch();

  const submitStepOne = async (values) => {
    const { firstName, middleName, lastName, title } = values;
    await dispatch(formStepOne(firstName, middleName, lastName, title));
    setPageNumber((pageNumber = pageNumber + 1));
  };

  const submitStepTwo = async (values) => {
    const { invenName, category } = values;
    await dispatch(submitStep2(invenName, category));
    setPageNumber((pageNumber = pageNumber + 1));
  };

  const formSubmitStepThree = async (values) => {
    const { productType } = values;
    await dispatch(submitStepThree(productType));
    history.push('/final');
  };

  return (
    <InfoPageContainer>
      {pageNumber === 1 && (
        <FormPageOne onSubmit={submitStepOne} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
      {pageNumber === 2 && (
        <FormPageTwo onSubmit={submitStepTwo} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
      {pageNumber === 3 && (
        <FormPageThree onSubmit={formSubmitStepThree} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </InfoPageContainer>
  );
};

export default withRouter(InfoPage);

const InfoPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
`;
