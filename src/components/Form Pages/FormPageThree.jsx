import React, { useState } from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import { FormTextInput } from '../FormInputs/FormTextInput';
import FormRadioInputLg from '../FormInputs/FormRadioInputLg';
import FormNav from '../FormNav';

let FormPageThree = (props) => {
  const [selectedFeild, setSelectedFeild] = useState(null);
  return (
    <PageThreeContainer>
      <HeaderContainer>
        <h2>We need to know one last thing about Invention Name to continue</h2>
      </HeaderContainer>
      <StyledForm onSubmit={props.handleSubmit}>
        <InvenTypeContainer>
          <label className='InvenTypeLabel' htmlFor='InvenTypeContainer'>
            What category does your invention fall in?
          </label>
          <InvenCardContainer id='InvenTypeContainer'>
            <FormRadioInputLg
              Icon={<i className='las la-microchip'></i>}
              Text='Physical Product'
              value='Physical Product'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputLg
              Icon={<i className='las la-globe-americas'></i>}
              Text='Method or Process'
              value='Method/Process'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInputLg
              Icon={<i className='las la-sticky-note'></i>}
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
              inputName='InvenCategory'
            />
          </FormInputContainer>
        ) : null}
        <FormNav pageNumber={props.pageNumber} />
      </StyledForm>
    </PageThreeContainer>
  );
};

FormPageThree = reduxForm({
  form: 'Step Three',
})(FormPageThree);

export default FormPageThree;

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 65px;
`;

const PageThreeContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  height: 80vh;
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

const FormInputContainer = styled.div`
  margin: 35px 15px;
  font-weight: bold;
  width: 80%;
`;

const InvenCardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const InvenTypeContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .InvenTypeLabel {
    font-weight: bold;
    margin: 35px 15px 0px 15px;
  }
`;
