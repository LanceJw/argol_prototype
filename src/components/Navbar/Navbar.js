import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMessage
} from '@fortawesome/free-regular-svg-icons'

import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import Argol_Logo from '../../assets/Navbar/Logo.png'

// CSS for Desktop View

const Container = styled.div`
display: flex;
width: 100%;
height: 110px;
align-items: center;
background-color: white;
`

const NavigationBar = styled.div`
max-width: 1100px;
width: 100%;
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
width: 90px;
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


// CSS for Mobile View

const MobileContainer = styled.div`
display: flex;
width: 100%;
height: 110px;
align-items: center;
background-color: white;
position: relative;
`

const MobileNavigationBar = styled.div`
width: 85%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const MobileLogo = styled.img`
width: 90px;
margin-right: 15px;
`

const MobileNavMenu = styled.div`
position: absolute;
background-color: #20242c;
right: 0;
width: 80%;
height: 100vh;
z-index: 2;
animation: slideIn 200ms linear alternate;

@keyframes slideIn {
    0% {right: -90%}
    50% {right: -50%}
    100% {right: 0px}
}

display: flex;
flex-direction: column;
`

const Icon = styled.div`
display: flex;
justify-content: flex-end;
font-size: 20px;
padding: 22px;
color: white;
`

const MobileLinksContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
gap: 18px;
`

const MobileLinks = styled.a`
text-decoration: none;
font-size: 20px;
color: white;
`


const Navbar = () => {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1100
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);


    const DisplayDesktop = () => {
        return (
            <Container>
                <NavigationBar>
                    <Left>
                        <a href='/'><Logo src={Argol_Logo} alt='Argol Logo' /></a>
                        <Links href='/'>Home</Links>
                        <Links href='/about-us'>About Us</Links>
                        <Links href='/products' onClick={() => {
                            localStorage.setItem('selected-range', 'DeLuxe')
                        }}>Products</Links>
                        <Links href='/'>Contact Us</Links>
                    </Left>
                    <Right>
                        <FontAwesomeIcon icon={faMessage} style={{ fontSize: '19px' }} />
                        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '19px' }} />
                    </Right>
                </NavigationBar>
            </Container>
        )
    }

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    })


    const DisplayMobile = () => {

        const openNavbar = () => {
            setOpen(true)
            document.getElementById('root').style.opacity = '0.2'
        }

        const closeNavbar = () => {
            setOpen(false)
            document.getElementById('root').style.opacity = '1'
        }

        return (
            <MobileContainer>
                <MobileNavigationBar>
                    <a href='/'><MobileLogo src={Argol_Logo} alt='Argol Logo' /></a>
                    <RxHamburgerMenu style={{ fontSize: '26px' }} onClick={openNavbar} />
                </MobileNavigationBar>
                {open &&
                    ReactDOM.createPortal(
                        <MobileNavMenu>
                            <Icon>
                                <RxCross1 onClick={closeNavbar} />
                            </Icon>
                            <MobileLinksContainer>
                                <MobileLinks href='/'>Home</MobileLinks>
                                <MobileLinks href='/about-us'>About Us</MobileLinks>
                                <MobileLinks href='/products'>Products</MobileLinks>
                                <MobileLinks href='/'>Contact Us</MobileLinks>
                            </MobileLinksContainer>
                        </MobileNavMenu>,
                        document.getElementById('navbar-modal')
                    )
                }
            </MobileContainer>
        )
    }

    return (
        <Fragment>
            {mobileView ? DisplayMobile() : DisplayDesktop()}
        </Fragment>
    )
}

export default Navbar