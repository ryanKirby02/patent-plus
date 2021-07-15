import { useState } from 'react';
import { useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import FormRadioInputSm from '../FormInputs/FormRadioInputSm';
import { FormTextInput } from '../FormInputs/FormTextInput';
import FormNav from '../FormNav';

let FormPageTwo = (props) => {
  const [selectedFeild, setSelectedFeild] = useState(null);

  const createrData = useSelector((state) => state.createrData);
  const {stepOne} = createrData

  return (
    <PageTwoContainer>
      <HeaderContainer>
        <h2>
          Okay {stepOne.lastName}, now we know about you, tell us about your invention
        </h2>
      </HeaderContainer>
      <StyledForm onSubmit={props.handleSubmit}>
        <FormInputContainer>
          <FormTextInput
            labelId='InvenName'
            labelText='What is the name of your invention? *'
            id='InvenName'
            inputName='invenName'
          />
        </FormInputContainer>
        <InvenTypeContainer>
          <label className='InvenTypeLabel' htmlFor='InvenTypeContainer'>
            What category does your invention fall in? *
          </label>
          <InvenCardContainer id='InvenTypeContainer'>
            <FormRadioInputSm
              Icon={<i className='las la-laptop-code'></i>}
              Text='Computer Science'
              value='Computer Science'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputSm
              Icon={<i className='las la-flask'></i>}
              Text='Chemistry'
              value='Chemistry'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputSm
              Icon={<i className='las la-atom'></i>}
              Text='Chemical Engineering'
              value='Chemical Engineering'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputSm
              Icon={<i className='las la-ruler'></i>}
              Text='Mechanical Engineering'
              value='Mechanical Engineering'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputSm
              Icon={<i className='las la-chart-line'></i>}
              Text='Diagnostic Imaging'
              value='Diagnostic Imaging'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputSm
              Icon={<i className='lar la-lightbulb'></i>}
              Text='Other'
              value='Other'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
          </InvenCardContainer>
        </InvenTypeContainer>
        {selectedFeild === 'Other' ? (
          <FormInputContainer>
            <FormTextInput
              labelId='InvenCategory'
              labelText='Please Enter a Category *'
              id='InvenCategory'
              inputName='invenCategory'
            />
          </FormInputContainer>
        ) : null}
        <FormNav pageNumber={props.pageNumber} />
      </StyledForm>
    </PageTwoContainer>
  );
};

FormPageTwo = reduxForm({
  form: 'Step Two',
})(FormPageTwo);

export default FormPageTwo;

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 65px;
`;

const PageTwoContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

const FormInputContainer = styled.div`
  margin: 35px 15px;
  font-weight: bold;
  width: 80%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  width: 907.97px;
  height: 600px;
  color: #444;
`;

const InvenCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const InvenTypeContainer = styled.div`
  .InvenTypeLabel {
    margin: 35px 0px;
    font-weight: bold;
  }
`;
