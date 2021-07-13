import React from 'react';
import styled from 'styled-components';

export default function FormTextInput({ labelId, labelText, id, inputName, inputedValue, onChangeHandler }) {
  return (
    <FormInputText>
      <label htmlFor={labelId}>{labelText}</label>
      <input id={id} type='text' name={inputName} value={inputedValue} onChange={onChangeHandler} />
    </FormInputText>
  );
}

const FormInputText = styled.div`
  input {
    margin-top: 8px;
    padding: 8px 15px;
    outline: none;
    border: 2px solid lightgray;
    transition: 0.2s;
    border-radius: 8px;
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
