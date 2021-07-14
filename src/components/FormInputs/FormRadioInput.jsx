import React from 'react';
import styled from 'styled-components';

export default function FormRadioInput({ Icon, Text, value, onChangeHandler }) {
  return (
    <RadioButtonContainer>
      <Label>
        <input type='radio' name='radio' value={value} onChange={onChangeHandler} />
        <RadioButton className='RadioBtn'>
          <CheckIcon className='checkIcon las la-check'></CheckIcon>
          <RadioButtonContent>
            {Icon}
            <h3>{Text}</h3>
          </RadioButtonContent>
        </RadioButton>
      </Label>
    </RadioButtonContainer>
  );
}

const RadioButtonContainer = styled.div``;

const Label = styled.label`
  input {
    display: none;
  }
  input:checked+.RadioBtn {
    border: 3px solid #518aff;
  }
  input:checked+ .RadioBtn > .checkIcon {
      opacity: 1;
      transform: translateX(-50%) scale(1);
  }
`;

const CheckIcon = styled.i`
  color: #ffffff;
  background-color: #518aff;
  font-size: 20px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) scale(4);
  border-radius: 50px;
  padding: 3px;
  transition: 0.2s;
  pointer-events: none;
  opacity: 0;
`;

const RadioButton = styled.span`
  margin: 10px;
  width: 100px;
  height: 150px;
  border: 3px solid transparent;
  border-radius: 6px;
  display: inline-block;
  position: relative;
  text-align: center;
  box-shadow: 0 0 20px #c3c3c367;
`;

const RadioButtonContent = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 40%;
  left: 50%;
  font-size: 12px;
  transform: translate(-50%, -50%);
  i {
      color: #518aff;
      line-height: 80px;
      font-size: 60px;
  }
`;
