import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faMessage
} from '@fortawesome/free-regular-svg-icons'

import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import Argol_Logo from '../../assets/Navbar/Logo.png'

const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
align-items: center;
`

const NavigationBar = styled.div`
max-width: 1100px;
width: 75%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
display: flex;
width: 55%;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const Logo = styled.img`
width: 100px;
margin-right: 15px;
`

const Links = styled.a`
text-decoration: none;
color: black;
`

const Right = styled.div`
width: 8%;
display: flex;
justify-content: space-between;
`

const Navbar = () => {
    return (
        <Container>
            <NavigationBar>
                <Left>
                    <a href='#'><Logo src={Argol_Logo} alt='Argol Logo' /></a>
                    <Links>Home</Links>
                    <Links>About Us</Links>
                    <Links href='/products'>Products</Links>
                    <Links>Contact Us</Links>
                </Left>
                <Right>
                    <FontAwesomeIcon icon={faMessage} style={{fontSize: '19px'}} />
                    <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: '19px'}} />
                </Right>
            </NavigationBar>
        </Container>
    )
}

export default Navbar