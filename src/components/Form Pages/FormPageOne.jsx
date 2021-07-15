import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import { FormTextInput } from '../FormInputs/FormTextInput';
import FormNav from '../FormNav';

import { Field } from 'redux-form';

let FormPageOne = (props) => {
  //state for the title
  const [dropdown, setDropdown] = useState('Perfer not to say');

  const [inventerSelected, setInventerSelected] = useState(null);

  const selectHandler = async (e) => {
    await setInventerSelected(e.target.value);
  };

  return (
    <FormPageOneContainer>
      <HeaderContainer>
        <h2>Welcome! To start tell us a little bit about yourself</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, distinctio qui optio harum sequi autem.
        </p>
      </HeaderContainer>
      <StyledForm onSubmit={props.handleSubmit}>
        <FormPageOneName>
          <FormTextInput labelId='Fname' labelText='First Name *' id='Fname' inputName='firstName' />
          <FormTextInput labelId='Mname' labelText='Middle Name' id='Mname' inputName='middleName' />
          <FormTextInput labelId='Lname' labelText='Last Name *' id='Lname' inputName='lastName' />
        </FormPageOneName>
        <FormPageOneTitle>
          <label htmlFor='titleSelector'>Your Title</label>
          <Field component='select' id='titleSelector' name='title' onChange={(e) => setDropdown(e.target.value)}>
            <option value='Perfer not to say'>Perfer not to say</option>
            <option value='Dr.'>Ph.D</option>
            <option value='MD.'>MD.</option>
            <option value='MS.'>MS.</option>
            <option value='MA.'>MA.</option>
            <option value='Other'>Other</option>
          </Field>
          {dropdown === 'Other' && (
            <InputTitle>
              <FormTextInput
                labelId='OtherTitle'
                inputName='InputedTitle'
                labelText='Please tell us your title'
                id='OtherTitle'
              />
            </InputTitle>
          )}
        </FormPageOneTitle>
        <label style={{ marginTop: '35px', fontWeight: 'bold' }} htmlFor='soloInventer'>
          Are there any other inventers?
        </label>
        <SoleInventer id='soloInventer'>
          <InventersInput
            type='radio'
            value='Yes'
            id='OptionYes'
            onChange={(e) => selectHandler(e)}
            checked={inventerSelected === 'Yes'}
          />
          <InventersLabel className='radio__label' htmlFor='OptionYes'>
            Yes
          </InventersLabel>
          <InventersInput
            type='radio'
            value='No'
            id='OptionNo'
            onChange={(e) => selectHandler(e)}
            checked={inventerSelected === 'No'}
          />
          <InventersLabel className='radio__label' htmlFor='OptionNo'>
            No
          </InventersLabel>
        </SoleInventer>
        <FormNav pageNumber={props.pageNumber} />
      </StyledForm>
    </FormPageOneContainer>
  );
};

FormPageOne = reduxForm({
  form: 'Step One',
})(FormPageOne);

export default FormPageOne;

const HeaderContainer = styled.div`
  width: 100%;
`;

const FormPageOneContainer = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  p {
    margin: 30px 0px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 600px;
  color: #444;
`;

const FormPageOneName = styled.div`
  display: flex;
  margin: 35px 15px;
  font-weight: bold;
  width: 80%;
`;

const FormPageOneTitle = styled.div`
  width: 80%;
  font-weight: bold;
  select {
    outline: none;
    padding: 8px 15px;
    width: 100%;
    margin-top: 8px;
    border: 2px solid lightgray;
    transition: 0.2s;
    border-radius: 8px;
  }
  select:hover {
    transform: scale(1.02);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }
  select:focus {
    transform: scale(1.02);
    border: 2px solid #39b7ff;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }
`;

const InputTitle = styled.div`
  width: 100%;
  margin-top: 35px;
`;

const SoleInventer = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 15px 0px 30px;
`;

const InventersInput = styled.input`
  display: none;
  :checked + .radio__label {
    background-color: #0083cf;
    transform: scale(1.04);
  }
`;

const InventersLabel = styled.label`
  padding: 10px 18px;
  font-size: 14px;
  color: white;
  background-color: #39b7ff;
  cursor: pointer;
  transition: background 0.2s;
  :not(:last-of-type) {
    border-right: 1px solid #18aaff;
  }
`;
