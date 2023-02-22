import React from 'react'
import styled from 'styled-components'

import Argol_Logo from '../../assets/Navbar/Logo.png'
import Furst_Logo from '../../assets/FurstLogo.png'

const Container = styled.div`
background-color: white;
height: 260px;
background-color: #20242c;
display: flex;
flex-direction: column;
`

const Content = styled.div`
width: 75%;
margin: 0rem auto 2rem;
max-width: 1100px;
display: flex;
flex-direction: row;
height: 100%;
`

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 15px;
margin-right: 3rem;
`

const Logo = styled.img`
width: 95px;
`

const Links = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;
margin: auto 5rem;
font-size: 14px;
`

const Heading = styled.span`
font-weight: 600;
font-size: 18px;
margin-bottom: 0.6rem;
color: white;
`

const Contact = styled.div`
display: flex;
flex-direction: column;
width: 30%;
font-size: 14px;
height: 100px;
margin: auto 3rem;
`

const CopyRight = styled.div`
border-top: 0.6px solid rgba(166, 166, 166, 0.4);
width: 75%;
margin: auto;
max-width: 1100px;
padding: 0.8rem 0rem;
color: #a6a6a6;
`

const style = {
    link: {
        textDecoration: 'none',
        color: '#a6a6a6',
        marginBottom: '0.4rem'
    }
}

const Footer = () => {
    return (
        <Container>
            
            <Content>
                {/* Logo */}
                <LogoContainer>
                    <Logo src={Argol_Logo}/>
                    <Logo src={Furst_Logo}/>
                </LogoContainer>

                {/* Links */}
                <Links>
                    <Heading>Link</Heading>
                    <a style={style.link} href='/'>Home</a>
                    <a style={style.link} href='/about-us'>About Us</a>
                    <a style={style.link} href='/products'>Products</a>
                    <a style={style.link} href='/contact-us'>Contact Us</a>
                </Links>

                {/* Contact Info */}
                <Contact>
                    <Heading>Contact Info</Heading>
                    <span style={{color: '#a6a6a6', marginBottom: '0.4rem'}}>Address: 5 Yishun Industrial Street 1 #05-14 North Spring Bizhub Singapore 768161</span>
                    <span style={{color: '#a6a6a6', marginBottom: '0.4rem'}}>WhatsApp: (65) 9683 9120</span>
                    <span style={{color: '#a6a6a6', marginBottom: '0.4rem'}}>lgoh_argol@singnet.com.sg</span>
                </Contact>


            </Content>

            <CopyRight>
                <span>Copyright @2022 All rights reversed | Argol & Company Pte Ltd</span>
            </CopyRight>

        </Container>
    )
}

export default Footer