import React from 'react';
import styled from 'styled-components';
import { initialState } from '../Context/reducer';

const UL = styled.ul`
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
    background-color:#6bc7da;
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

const RightNav = (initialState, { open }) => {
//if (initialState) {
  return (
    <UL open={open}>
      <a href="/dashboard">About Us</a>
      <a href="/create">Create Link</a>
      <a href="/signin">Sign In</a>
    </UL>
  )
}
{/*else {  
  return (
    <UL open={open}>
      <a href="/dashboard">About Us</a>
      <a href="/create">Create Link</a>
      <a href="/profile">Profile</a>
      <a href="/signin">Sign Out</a>
    </UL>
)
  }
 }
  */}
export default RightNav