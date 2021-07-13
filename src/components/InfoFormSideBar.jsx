import React from 'react'
import styled from 'styled-components';

export default function InfoFormSideBar() {
    return (
        <SidebarContainer>
            <SidebarProgress>
                <ul>
                    <li>Creator Information</li>
                    <li>Project Details</li>
                    <li>Novelty Determination</li>
                    <li>Commercialization Determination</li>
                    <li>Final Review</li>
                </ul>
            </SidebarProgress>
            <SidebarNeedHelp>
                <p>Need Help? (111)222-3333</p>
            </SidebarNeedHelp>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    flex: 2;
    padding: 50px;
    background-color: #518AFF;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Poppins', sans-serif;

`

const SidebarProgress = styled.div`
    ul{
        list-style: none;
        li {
            padding-top: 60px;
        }
    }
`

const SidebarNeedHelp = styled.div`
    color: white;
`
