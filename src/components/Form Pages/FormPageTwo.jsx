import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FormRadioInput from '../FormInputs/FormRadioInput';
import FormTextInput from '../FormInputs/FormTextInput';

export default function FormPageTwo() {
  const [invenName, setInvenName] = useState('');
  const [selectedFeild, setSelectedFeild] = useState(null);
  const [inputedFeild, setInputedFeild] = useState('');

  return (
    <PageTwoContainer>
      <HeaderContainer>
        <h2>Okay Name, now we know about you, tell us about your invention</h2>
      </HeaderContainer>
      <StyledForm>
        <FormInputContainer>
          <FormTextInput
            labelId='InvenName'
            labelText='What is the name of your invention? *'
            id='InvenName'
            inputedValue={invenName}
            onChangeHandler={(e) => setInvenName(e.target.value)}
          />
        </FormInputContainer>
        <InvenTypeContainer>
          <label className='InvenTypeLabel' htmlFor='InvenTypeContainer'>
            What category does your invention fall in?
          </label>
          <InvenCardContainer id='InvenTypeContainer'>
            <FormRadioInput
              Icon={<i className='las la-laptop-code'></i>}
              Text='Computer Science'
              value='Computer Science'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInput
              Icon={<i className='las la-flask'></i>}
              Text='Chemistry'
              value='Chemistry'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInput
              Icon={<i className='las la-atom'></i>}
              Text='Chemical Engineering'
              value='Chemical Engineering'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInput
              Icon={<i className='las la-ruler'></i>}
              Text='Mechanical Engineering'
              value='Mechanical Engineering'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInput
              Icon={<i className='las la-chart-line'></i>}
              Text='Diagnostic Imaging'
              value='Diagnostic Imaging'
              onChangeHandler={(e) => setSelectedFeild(e.target.value)}
            />
            <FormRadioInput
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
              inputedValue={inputedFeild}
              onChangeHandler={(e) => setInputedFeild(e.target.value)}
            />
          </FormInputContainer>
        ) : null}
      </StyledForm>
    </PageTwoContainer>
  );
}

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
  height: 494px;
  color: #444;
`;

const InvenCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const InvenTypeContainer = styled.div`
  .InvenTypeLabel {
    margin: 35px 15px;
    font-weight: bold;
  }
`;
