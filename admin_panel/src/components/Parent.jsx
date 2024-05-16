import React from "react";
import { Link } from "react-router-dom";
import {Box, Button, styled } from '@mui/material';


const SideNavbar = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 17rem;
  background-color: #1c261f;
`;

const SideNavHeader = styled(Box)`
  color: #F0ECF9;
  font-size: 30px;
  margin-top: 20px;

`;

const SideNavBtn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00FF00;
  gap: 18px;
  padding: 10px 10px;
  border-right: 4px solid transparent;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  text-decoration: none;
  transition-duration: .12s;
  margin-top: 40px;
  
  &:hover{
    
  }
`;

const Btn = styled(Button)`
    text-transform: none;
    background: orange;
    width: 9rem;
    height: 40px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    font-size: 24px;
`;


const Parent = () => {
  return (
      <SideNavbar> 
        <SideNavHeader> Admin Panel </SideNavHeader>
          <SideNavBtn>
            <Btn>
              <Link to="/admin" className="linkStyle"> Dashboard </Link>
            </Btn>

            <Btn>
              <Link to="/admin/table" className="linkStyle"> Table </Link>
            </Btn>

            <Btn>
              <Link to="/admin/insert" className="linkStyle"> Insert </Link>
            </Btn>

            <Btn>
              <Link to="/admin/update" className="linkStyle"> Update </Link>
            </Btn>

            <Btn>
              <Link to="/" className="linkStyle"> Logout </Link>
            </Btn>
          </SideNavBtn>
      </SideNavbar>
  );
};

export default Parent;
