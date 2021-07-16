import React from 'react'
import { withRouter } from 'react-router';
import styled from 'styled-components';

const InfoFormSideBar = ({pageNumber, setPageNumber, history}) => {

    const clickHandler = (number, path) => {
        setPageNumber(number)
        history.push(path)
    }

    return (
        <SidebarContainer>
            <SidebarProgress>
                <ul>
                    <li onClick={() => clickHandler(1, '/')}>Creator Information</li>
                    <li onClick={() => clickHandler(2, '/')}>Invention Details</li>
                    <li onClick={() => clickHandler(3, '/')}>Product Details</li>
                    <li onClick={() => clickHandler(4, '/final')}>Final Review</li>
                </ul>
            </SidebarProgress>
            <SidebarNeedHelp>
                <p>Need Help? (111)222-3333</p>
            </SidebarNeedHelp>
        </SidebarContainer>
    )
}

export default withRouter(InfoFormSideBar)

const SidebarContainer = styled.div`
    padding: 100px;
    width: 20vw;
    background-color: #518AFF;
    color: white;
    height: 92.3vh;
    justify-content: space-evenly;
    font-family: 'Poppins', sans-serif;

`

const SidebarProgress = styled.div`
    ul{
        list-style: none;
        li {
            margin-top: 60px;
            cursor: pointer;
        }
    }
`

const SidebarNeedHelp = styled.div`
    margin-top: 350px;
    font-size: 12px;
    width: 100%;
    color: white;
`
