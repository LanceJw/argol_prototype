import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'
import { Product_Data } from './Product_Data'
import { Range_Data } from '../LandingPage/Range_Data'



const Container = styled.div`

`

const Filter = styled.div`
display: flex;
flex-direction: row;
width: 70%;
margin: auto;
justify-content: space-between;
`



const ProductPage = () => {

    const [displayedData, setDisplayedData] = useState(Product_Data.filter(range => range.range === 'DeLuxe'))

    useEffect(() => {
        const selectedRange = localStorage.getItem('selected-range')
        setDisplayedData(Product_Data.filter(range => range.range === selectedRange))
    }, [])

    return (
        <Fragment>
            <Navbar/>
            <Container>
                {/* Filter Area */}
                <Filter>
                    {Range_Data.map((data) => {
                        return (
                            <p onClick={() => {
                                localStorage.setItem('selected-range', data.id)
                                setDisplayedData(Product_Data.filter(range => range.range === data.id))
                                console.log(displayedData)
                            }}>{data.range}</p>
                        )
                    })}
                </Filter>

                {/* Display product area */}
                {displayedData.map((data) => {
                    return (
                        <p>{data.model}</p>
                    )
                })}    
                
            </Container>
        </Fragment>
    )
}

export default ProductPage