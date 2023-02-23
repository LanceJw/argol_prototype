import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

// CSS for Desktop View

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 80%;
max-width: 1100px;
margin: 0rem auto 6rem;
height: 350px;
`

const Image = styled.img`
width: 100%;
`

const Sizing = styled.table`
text-align: center;
justify-self: auto;
border-spacing: 0px;
border-collapse: collapse;
overflow-x: auto;
border: 2px solid black;
`


// CSS for Mobile View

const MobileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
margin: 0rem auto 6rem;
height: auto;
gap: 40px;
`

const MobileImage = styled.img`
width: 100%;
`

const MobileSizing = styled.table`
text-align: center;
justify-self: auto;
border-spacing: 0px;
border-collapse: collapse;
overflow-x: auto;
border: 2px solid black;
`

const AllMasterProduct = (props) => {

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
                {/* Product Image */}
                <Image src={props.data.image} />

                {/* Sizing Table */}
                <Sizing>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef'}}>Cat. No</th>
                        <td style={{ border: '1px solid black' }}>{props.data.catNo}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Description</th>
                        <td style={{ border: '1px solid black' }}>{props.data.size}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Quantity / Carton</th>
                        <td style={{ border: '1px solid black' }}>{props.data.quantity}</td>
                    </tr>
                </Sizing>
            </Container>
        )
    }

    const DisplayMobile = () => {
        return (
            <MobileContainer>
                {/* Product Image */}
                <MobileImage src={props.data.image} />

                {/* Sizing Table */}
                <Sizing>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef', width: '44%'}}>Cat. No</th>
                        <td style={{ border: '1px solid black' }}>{props.data.catNo}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Description</th>
                        <td style={{ border: '1px solid black' }}>{props.data.size}</td>
                    </tr>
                    <tr>
                        <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Quantity / Carton</th>
                        <td style={{ border: '1px solid black' }}>{props.data.quantity}</td>
                    </tr>
                </Sizing>
            </MobileContainer>
        )
    }


    return (
        <Fragment>
            {mobileView ? DisplayMobile() : DisplayDesktop()}
        </Fragment>
    )
}

export default AllMasterProduct