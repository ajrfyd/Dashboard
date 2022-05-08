import React, { useState } from "react";
import styled from 'styled-components';
import LoGo from '../../imgs/logo.png';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { SidebarData } from "../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sideBarChange = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%'
    }
  }


  return (
    <>
      <Bar style={expanded ? { left: '60%'} : {left: '5%'}} onClick={() => setExpanded(prev => !prev)}>
        <UilBars />
      </Bar>
      <SideBar style={expanded ? {left: 0}: { left: '-100%' }}>
        {/* logo */}
        <Logo>
          <Img src={LoGo} alt='logo' />
          <span>
            Sh<span>o</span>ps
          </span>
        </Logo>
        {/* menu */}
        <Menu>
          {
            SidebarData.map((item, idx) => (
              <MenuItem key={idx} className={selected === idx ? 'active' : ''} onClick={() => setSelected(idx)}>
                <Icon>
                  <item.icon />
                </Icon>
                <span>{item.heading}</span>
              </MenuItem>
            ))
          }
          <MenuItem>
            <UilSignOutAlt />
          </MenuItem>
        </Menu>
      </SideBar>
    </>
  )
}

export default Sidebar;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;
  
  @media (max-width: 768px) {
    /* display: none; */
    position: fixed;
    z-index: 9;
    background: #ffe0e0;
    width: 55%;
    padding-right: 1rem;
    height: 100%;
  }
`

const Logo = styled.div`
  display: flex;
  height: 5rem;
  font-weight: bold;
  font-size: 22px;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 4%;

  & > span > span {
    color: var(--pink);
  }

  @media (max-width: 1200px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }

`

const Img = styled.img`
  width: 3rem;
  height: 3rem;
`

const Menu = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: var(--activeItem);
    margin-left: 0;
    border-radius: .7rem;
  }
  &.active:before {
    content: '';
    height: 100%;
    width: 8px;
    background-color: var(--pink);
    margin-right: calc(1rem - 8px);
  }
  &:last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
  }

  @media (max-width: 1200px) {
    span {
      display: none;
    }
  }
  @media (max-width: 768px) {
    span {
      display: block;
    }
    &:last-child {
      position: relative;
      margin-top: 2rem;
    }
  }
`

const Icon = styled.div`
  
`

const Bar = styled.div`
  display: flex;
  position: fixed;
  top: 2rem; 
  /* left: 10rem; */
  z-index: 9;
  background: #ffe0e0;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`