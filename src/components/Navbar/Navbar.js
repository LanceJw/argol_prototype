import React, { useState, useEffect, Fragment, useRef } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMessage
} from '@fortawesome/free-regular-svg-icons'

import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { RxHamburgerMenu } from 'react-icons/rx'

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

const MobileNavbar = styled.div`
background-color: #bd2626;
position: absolute;
width: 100%;
height: 100%;
z-index: 2;
color: black;
`

const MobileLinks = styled.a`
text-decoration: none;
color: black;
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


    const displayDesktop = () => {
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
            console.log(open)

        }

        return (
            <MobileContainer>
                <MobileNavigationBar>
                    <a href='/'><MobileLogo src={Argol_Logo} alt='Argol Logo' /></a>
                    <RxHamburgerMenu style={{ fontSize: '26px' }} onClick={openNavbar} />
                </MobileNavigationBar>
                {/* <MobileLinks href='/'>Home</MobileLinks>
                    <MobileLinks href='/about-us'>About Us</MobileLinks>
                    <MobileLinks href='/products' onClick={() => {
                        localStorage.setItem('selected-range', 'DeLuxe')
                    }}>Products</MobileLinks>
                    <MobileLinks href='/'>Contact Us</MobileLinks> */}

                {open &&
                    ReactDOM.createPortal(
                        <MobileNavbar>
                            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'space-between', height: '30%', marginTop: '2rem', width: 'auto' }}>
                                <MobileLinks className='navigationLinks' href='/'>Home</MobileLinks>
                                <MobileLinks href='/aboutus'>About Us</MobileLinks>
                                <MobileLinks href='/catalogue'>Products</MobileLinks>
                                <MobileLinks href='/new-products'>New Products</MobileLinks>
                                <MobileLinks href='/contactus'>Contact Us</MobileLinks>
                            </div>
                        </MobileNavbar>,
                        document.getElementById('navbar-modal')
                    )
                }
            </MobileContainer>
        )
    }

    return (
        <Fragment>
            {mobileView ? DisplayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default Navbar