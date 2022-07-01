import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
import './NavAdmin.css'

function NavAdmin() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <NavbarContainer>
        <Menu>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="aboutUs">About Us</MenuLink>
          <MenuLink href="product">Product</MenuLink>
          <MenuLink href="faq">FAQ</MenuLink>
        </Menu>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              onClick={showSidebar}
              style={{ color: "#0032E1" }}
            />
          </Link>
        </div>
      </NavbarContainer>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillCloseSquare
                onClick={showSidebar}
                className="closeButton"
              />
            </Link>
          </li>
          <li className="navbar-toggle">
            <Logo className="menu-bars">BISHAPAY</Logo>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
const NavbarContainer = styled.nav`
    width:50%;
    height:80px;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight:bold;
    font-family: 'Roboto', sans-serif;
    
    left:0;
    padding-top:0;
`
const Logo = styled.a`
    font-size:32px;
    font-weight: 700;
    justify-content: start;
    text-decoration: none;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top:10px;
`


const MenuLink = styled.a`
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    padding: 20px;
    margin: 0 20px;
    color: #000000;

    &:hover{
        color:#407BFF;
    }
    &:active {
        color: #407BFF;
    }
`

export default NavAdmin