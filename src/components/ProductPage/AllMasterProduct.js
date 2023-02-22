import React from 'react'
import styled from 'styled-components'


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

const AllMasterProduct = (props) => {
    return (
        <Container>
            {/* Product Image */}
            <Image src={props.data.image} />

            {/* Sizing Table */}
            <Sizing>
                <tr>
                    <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Cat. No</th>
                    <td style={{ border: '1px solid black' }}>{props.data.catNo}</td>
                </tr>
                <tr>
                    <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Description</th>
                    <td style={{ border: '1px solid black' }}>{props.data.size}</td>
                </tr>
                <tr>
                    <th style={{ border: '1px solid black',backgroundColor: '#aaddef' }}>Quantity / Carton</th>
                    <td style={{ border: '1px solid black' }}>{props.data.quantity}</td>
                </tr>
            </Sizing>
        </Container>
    )
}

export default AllMasterProduct