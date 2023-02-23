import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BsDot } from 'react-icons/bs'



const Container = styled.div`
width: 80%;
max-width: 1100px;
margin: 0rem auto 3rem;
height: 600px;
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
margin-bottom: 3rem;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ProductImage = styled.img`
width: 50%;
height: 50%;
margin: auto;
`

const Description = styled.div`
width: 45%;
margin: auto;
`

const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 1.5rem;
gap: 15px;
`

const Sizing = styled.table`
width: 100%;
height: auto;
text-align: center;
justify-self: auto;
border-spacing: 0px;
border-collapse: collapse;
overflow-x: auto;
border: 2px solid black;
`

const style = {
    tableHead: {
        backgroundColor: '#aaddef',
        height: '30px'
    },
}


const Product = (props) => {

    
    useEffect(() => {
        document.title = 'Argol & Company Pte Ltd | Products'
    }, [])


    return (
        <Container>
            <Header>
                <p>{props.data.model}</p>
            </Header>

            <Content>
                {/* Product Image */}
                <ProductImage style={{width: props.data.imageSize}} src={props.data.image} />

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
                                <th style={{ border: '1px solid black'}}>Cat No.</th>
                                <th style={{ border: '1px solid black'}}>Size</th>
                                <th>Quantity / Carton</th>
                            </tr>
                        </thead>
                        {props.data.sizing.map((data) => {
                            return (
                                <tbody style={{ backgroundColor: data.background_color}}>
                                    <tr style={{height: '30px'}}>
                                        <td style={{ border: '1px solid black'}}>{data.catNo}</td>
                                        <td style={{ border: '1px solid black'}}>{data.size}</td>
                                        <td style={{ border: '1px solid black'}}>{data.quantity}</td>
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