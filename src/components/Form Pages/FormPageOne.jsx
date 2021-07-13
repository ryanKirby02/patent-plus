import React, { useState } from 'react';
import styled from 'styled-components';
import FormTextInput from '../FormInputs/FormTextInput';
import FormNav from '../FormNav';

export default function FormPageOne({ pageNumber, setPageNumber }) {
  //state for the name
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  //state for the title
  const [dropdown, setDropdown] = useState('Perfer not to say');
  const [inputedTitle, setInputedTitle] = useState('');

  //state for radio inputs
  const [inventerSelected, setInventerSelected] = useState(null);

  const selectHandler = async (e) => {
    await setInventerSelected(e.target.value);
  };

  return (
    <FormPageOneContainer>
      <HeaderContainer>
        <h2>Welcome! To start tell me a little bit about yourself</h2>
        <p>We need some basic Information like name, title, and if this is a solo project to get the ball rolling.</p>
      </HeaderContainer>
      <StyledForm autocomplete='off'>
        <FormPageOneName>
          <FormTextInput
            labelId='Fname'
            labelText='First Name *'
            id='Fname'
            name='firstName'
            value={firstName}
            onChangeHandler={(e) => setFirstName(e.target.value)}
          />
          <FormTextInput
            labelId='Mname'
            labelText='Middle Name'
            id='Mname'
            name='middleName'
            value={middleName}
            onChangeHandler={(e) => setMiddleName(e.target.value)}
          />
          <FormTextInput
            labelId='Lname'
            labelText='Last Name *'
            id='Lname'
            name='lastName'
            value={lastName}
            onChangeHandler={(e) => setLastName(e.target.value)}
          />
        </FormPageOneName>
        <FormPageOneTitle>
          <label htmlFor='titleSelector'>Your Title</label>
          <select id='titleSelector' value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
            <option value='Perfer not to say'>Perfer not to say</option>
            <option value='Ph.D'>Ph.D</option>
            <option value='MD.'>MD.</option>
            <option value='MS.'>MS.</option>
            <option value='MA.'>MA.</option>
            <option value='Other'>Other</option>
          </select>
          {dropdown === 'Other' && (
            <InputTitle>
              <FormTextInput
                labelId='OtherTitle'
                labelText='Please tell us your title'
                id='OtherTitle'
                value={inputedTitle}
                onChangeHandler={(e) => setInputedTitle(e.target.value)}
              />
            </InputTitle>
          )}
        </FormPageOneTitle>
        <label style={{ marginTop: '100px', fontWeight: 'bold' }} htmlFor='soloInventer'>
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
      </StyledForm>
      <FormNav setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </FormPageOneContainer>
  );
}

const HeaderContainer = styled.div`
  margin: 50px 150px 50px 150px;
`;

const FormPageOneContainer = styled.div`
  flex: 6;
  font-family: 'Lato', sans-serif;
  align-items: center;
  p {
    margin-top: 15px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  width: 75%;
  height: auto;
  color: #444;
  margin: 50px 150px 150px 150px;
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
  margin-top: 15px;
  input {
    width: 100%;
    margin-top: 8px;
    padding: 8px 15px;
    outline: none;
    border: 2px solid lightgray;
    transition: 0.2s;
    border-radius: 8px;
  }
  input:hover {
    transform: scale(1.02);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }
  input:focus {
    border: 2px solid #39b7ff;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
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
