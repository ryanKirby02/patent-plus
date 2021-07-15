import React from 'react';
import styled from 'styled-components';

import {Field} from 'redux-form'

export function FormTextInput({ labelId, labelText, id, inputName, }) {
  return (
    <FormInputText>
      <label htmlFor={labelId}>{labelText}</label>
      <Field component='input' id={id} type='text' name={inputName}  autoComplete='off' />
    </FormInputText>
  );
}

const FormInputText = styled.div`
  input {
    margin: 8px 15px 0px 0px;
    padding: 8px 15px;
    outline: none;
    border: 2px solid lightgray;
    transition: 0.2s;
    border-radius: 8px;
    width: 100%;
    justify-content: space-between;
  }
  input:hover {
    transform: scale(1.02);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  input:focus {
    border: 2px solid #39b7ff;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;
