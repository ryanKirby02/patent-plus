import React from 'react'
import styled from 'styled-components';

export default function InfoFormSideBar({pageNumber, setPageNumber}) {
    return (
        <SidebarContainer>
            <SidebarProgress>
                <ul>
                    <li onClick={() => setPageNumber(1)}>Creator Information</li>
                    <li onClick={() => setPageNumber(2)}>Invention Details</li>
                    <li onClick={() => setPageNumber(3)}>Product Details</li>
                    <li onClick={() => setPageNumber(4)}>Final Review</li>
                </ul>
            </SidebarProgress>
            <SidebarNeedHelp>
                <p>Need Help? (111)222-3333</p>
            </SidebarNeedHelp>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    padding: 100px;
    width: 25vw;
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
