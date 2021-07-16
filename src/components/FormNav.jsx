import React from 'react';
import styled from 'styled-components';

export default function FormNav({ pageNumber }) {
  return (
    <FormNavContainer>
      <p>{pageNumber} of 3</p>
      <StyledButton type='submit'>Next &gt;</StyledButton>
    </FormNavContainer>
  );
}

const FormNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  p {
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 18px;
  color: #39b7ff;
  background-color: white;
  border: 2px solid #39b7ff;
  border-radius: 15px;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  :hover {
    background-color: #39b7ff;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;
