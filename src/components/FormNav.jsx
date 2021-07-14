import React from 'react';
import styled from 'styled-components';

export default function FormNav({ pageNumber, setPageNumber }) {
  const nextHandler = () => {
    if (pageNumber >= 5) return;
    setPageNumber((pageNumber = pageNumber + 1));
  };
  const goBackHandler = () => {
    if (pageNumber === 1) return;
    setPageNumber((pageNumber = pageNumber - 1));
  };
  return (
    <FormNavContainer>
      {pageNumber > 1 ? (
        <StyledButton onClick={goBackHandler}>&lt; Go Back</StyledButton>
      ) : (
        <DisabledButton>&lt; Go Back</DisabledButton>
      )}

      <p>Page {pageNumber} of 5</p>
      {pageNumber !== 5 ? (
        <StyledButton onClick={nextHandler}>Next &gt;</StyledButton>
      ) : (
        <DisabledButton>Next &gt;</DisabledButton>
      )}
    </FormNavContainer>
  );
}

const FormNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  :hover {
    background-color: #39b7ff;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

const DisabledButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 18px;
  border: 2px solid gray;
  color: gray;
  background-color: lightgray;
  border-radius: 15px;
  transition: 0.2s;
`;
