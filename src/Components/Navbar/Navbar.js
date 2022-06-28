import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import authService from '../../Services/auth-services';

function Navbar() {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/login')
    }

    const [currentUser, setCurrentUser] = useState(undefined);

    const logOut = () => {
        authService.logout();
        window.location.reload();
      };

  useEffect(() => {
    const user = authService.getCurrentUser();
    const currentDate = new Date()

    if (user) {
        const decoded = jwt_decode(user.data.token)
      console.log(decoded.exp * 1000)
      console.log(currentDate.getTime() - decoded.exp * 1000)
      setCurrentUser(user);
    }
  }, []);

  return (
        <>
        <NavbarContainer>
            <Logo href='/'>Bishapay</Logo>
            <Menu>
                <MenuLink href='/'>Home</MenuLink>
                <MenuLink href='aboutUs'>About Us</MenuLink>
                <MenuLink href='product'>Product</MenuLink>
                <MenuLink href='faq'>FAQ</MenuLink>
            </Menu>
            {
                currentUser ? (
                    <LoginButton type='button' onClick={logOut}>Log Out</LoginButton>
                ) : (
                    <LoginButton type='button' onClick={navigateToLogin}>Log In</LoginButton>
                )
            }
            
        </NavbarContainer>

       

        </>
  )
}




const NavbarContainer = styled.nav`
    width:1200px;
    height:100px;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight:bold;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    padding-top:0;
`
const Logo = styled.a`
    font-size:32px;
    color: #605CFF;
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

    &:active {
        color: #407BFF;
    }
`
const LoginButton = styled.button`
    padding:10px 30px;
    border-radius:20px;
    background: #605CFF;
    border: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 3px 20px 20px -11px rgba(117,166,146,0.78);
    -webkit-box-shadow: 3px 26px 33px -11px rgba(117,166,146,0.78);
    -moz-box-shadow: 3px 26px 33px -11px rgba(117,166,146,0.78);
`


export default Navbar