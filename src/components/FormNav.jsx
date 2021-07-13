import React from 'react'
import styled from 'styled-components'

export default function FormNav({pageNumber, setPageNumber}) {
    const nextHandler = () => {
        if(pageNumber >= 5) return
        setPageNumber(pageNumber = pageNumber + 1)
    }
    const goBackHandler = () => {
        if(pageNumber === 1) return
        setPageNumber(pageNumber = pageNumber - 1)
    }
    return (
        <FormNavContainer>
            <StyledButton onClick={goBackHandler}>&lt; Go Back</StyledButton>
            <p>{pageNumber}/5</p>
            <StyledButton disabled={pageNumber === 5} onClick={nextHandler}>Next &gt;</StyledButton>
        </FormNavContainer>
    )
}

const FormNavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 150px 0 150px;
`

const StyledButton = styled.button`
    width: auto;
    height: 40px;
    font-size: 18px;
    color: #39b7ff;
    background-color: white;
    border: none;
    border-bottom: 3px solid #39b7ff;
    transition: 0.5s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
`
