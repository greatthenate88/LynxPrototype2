import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:20;
  a {
    padding: 15px 10px;
    color:black;
    &:hover {
        color:darkslategray;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:#009fa8;
    opacity:.9;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 175px;
    padding-top: 3.5rem;
    padding-right:1rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="/">About Us</a>
      <a href="/">Contact Us</a>
      <a href="/SignIn">Sign In/SignUp</a>
    </Ul>
  )
}

export default RightNav