import React from 'react'
import styled from 'styled-components'
import { BsDot } from 'react-icons/bs'

const Container = styled.div`
width: 70%;
max-width: 1100px;
margin: auto;
`

const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-size: 32px;
letter-spacing: 0.8px;
height: 80px;
background: linear-gradient(to right, rgba(246, 185, 17, 0.9), rgba(228, 106, 30, 0.9), rgba(216, 31, 31, 0.8), rgba(229, 119, 31, 0.9));
color: white;
font-weight: 600;
border-radius: 8px;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ProductImage = styled.img`
width: 55%;
`

const Description = styled.div`
width: 38%;
padding-top: 2rem;
`

const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 1.5rem;
height: 110px
`

const Sizing = styled.table`
width: 100%;
height: 45%;
text-align: center;
justify-self: auto;
border-spacing: 0px;
overflow-x: auto;
border-collapse: collapse;
border: 2px solid black;
`

const style = {
    tableHead: {

    },
    tableBody: {
        border: '1px solid black'
    }
}

const Product = (props) => {
    return (
        <Container>
            <Header>
                <p>{props.data.model}</p>
            </Header>

            <Content>
                {/* Product Image */}
                <ProductImage src={props.data.image} />

                {/* Description (+ sizes) */}
                <Description>
                    {/* Details section */}
                    <Details>
                        {props.data.details.map((data) => {
                            return (
                                <span><BsDot style={{ verticalAlign: 'bottom' }} />{data.value}</span>
                            )
                        })}
                    </Details>

                    {/* Sizing section */}
                    <Sizing>
                        <thead style={style.tableHead}>
                            <tr>
                                <th style={{ border: '1px solid black' }}>Cat No.</th>
                                <th style={{ border: '1px solid black' }}>Size</th>
                                <th>Quantity / Carton</th>
                            </tr>
                        </thead>
                        {props.data.sizing.map((data) => {
                            return (
                                <tbody style={{ backgroundColor: data.background_color }}>
                                    <tr >
                                        <td style={{ border: '1px solid black' }}>{data.catNo}</td>
                                        <td style={{ border: '1px solid black' }}>{data.size}</td>
                                        <td style={{ border: '1px solid black' }}>{data.quantity}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Sizing>
                </Description>
            </Content>
        </Container>
    )
}

export default Product