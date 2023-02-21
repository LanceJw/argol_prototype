import React, { useEffect, Fragment } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'

const Container = styled.div`
width: 45%;
margin: 1.6rem auto 0rem;
`

const Content = styled.p`
word-spacing: 5px;
text-align: justify;
margin: 0px;
margin: 0rem auto 1rem;
`

const Heading = styled.div`
margin-bottom: 0.7rem;
font-weight: 600;
`



const AboutUs = () => {

    useEffect(() => {
        document.title = 'Argol & Company Pte Ltd | About Us'
    }, [])

    return (
        <Fragment>
            <Navbar />
            <Container>
                <Heading style={{textTransform: 'uppercase', marginBottom: '1.6rem'}}>Proudly Singaporean since 2004</Heading>
                <Heading>1986 - 1999</Heading>
                <Content>
                    A veteran in the paint brushes and paint rollers industry since 1986! Lawrence T P Goh, the name known to many Hardware and Paint resellers in East & West Malaysia, Brunei, Indonesia and Hongkong. 
                    Having worked for England and Europe's well-known brand Harris, for 9 years. Through Harris Lawrence has also worked alongside with another well-known German brand; Fia.</Content>
                <Content>
                    In 1994, when Stanley Tools, USA, acquired American Brush Company (ABC), Germany's Friess and England's Mosley Stone, Lawrence was poached. And worked for Stanley Tools, Singapore.
                </Content>
                <Content>
                    Core responsibility. Solely to develop and strategise Stanley's Growth Strategy; market & product developments and market penetration for incremental revenues and market's shares.
                </Content>
                <Content>
                Through these opportunities, Lawrence gained and progressed well with products' manufacturing, technicality and materials - Paint brushes and paint rollers!
                </Content>

                <Heading style={{marginTop: '3rem'}}>2000</Heading>
                <Content>
                    In this millennium, Lawrence joined Germany's Cristin. To set up their subsidiary office in Singapore. As a Shareholder and Director.
                </Content>
                <Content>
                    In 2004, Argol & Company Pte Ltd was set-up. To capitalise on market's growth and potentials. And also opportunities for product developments.
                </Content>
                <Content>
                    And today, Argol brand may not be a market brand leader. But definitely and truly, a brand that emphasises Product Differentiation as its Competitive Advantages. Every material used has its specific role. Hence, Argol's products do dominant over competitors. We usually lead but hardly follow.
                </Content>
                <Content>
                    As Argol's tagline: *Performance Focussed* / * Before you start, think of the finish*
                </Content>
            </Container>
        </Fragment>

    )
}

export default AboutUs