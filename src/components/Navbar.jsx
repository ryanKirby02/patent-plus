import React from 'react';
import styled from 'styled-components';

import LogoImage from '../img/Logo.png';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo>
        <img src={LogoImage} alt='logo' />
        <h1>PatentPlus</h1>
      </Logo>
      <NavbarLinks>
        <ul>
          <li>These</li>
          <li>Links</li>
          <li>Dont</li>
          <li>Work</li>
        </ul>
      </NavbarLinks>
      <Profile>
        <img
          src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
          alt='profile placeholder'
        />
      </Profile>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
    width: 100%;
    height: 75px;
    display: flex;
    font-family: 'Poppins', sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;
    z-index: 2;
    position: sticky;
    top: 0;
    background-color: white;
`;

const Logo = styled.div`
    padding: 15px;
    img {
        width: 50px;
        object-fit: cover;
    }
    display: flex;
    align-items: center;
`;

const NavbarLinks = styled.div`
    padding: 15px;
    ul {
        display: flex;
        list-style: none;
        li{
            margin-right: 100px;
            font-size: 18px;
            cursor: pointer;
            transition: 0.3s
        }
        li:hover {
            color: #37B6FF;
        }
    }
`;

const Profile = styled.div`
    padding: 15px;
    img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100%;
        cursor: pointer;
        transition: 0.3s
    }
    img:hover {
        transform: scale(1.05)
    }
`;
