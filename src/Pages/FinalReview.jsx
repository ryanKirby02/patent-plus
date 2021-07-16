import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getFormData } from '../actions/FormActions';
import InfoFormSideBar from '../components/InfoFormSideBar';

const FinalReview = ({ setPageNumber, history }) => {
  const dispatch = useDispatch();

  const createrData = useSelector((state) => state.createrData);
  const { stepOne } = createrData;

  useEffect(() => {
    if (!stepOne) {
        setPageNumber(1)
      history.push('/');
    } else {
      dispatch(getFormData(stepOne._id));
    }
  }, [dispatch, setPageNumber, history, stepOne]);

  return (
    <Container>
      <InfoFormSideBar setPageNumber={setPageNumber} />
    </Container>
  );
};

export default withRouter(FinalReview);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
