import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'
import Product from './Product'
import { Product_Data } from './Product_Data'
import { Range_Data } from '../LandingPage/Range_Data'



const Container = styled.div`

`

const FilterContainer = styled.div`
display: flex;
flex-direction: row;
width: 70%;
max-width: 1100px;
margin: 0rem auto 1.8rem;
justify-content: space-between;
`

const Filter = styled.p`
letter-spacing: 0.5px;
padding: 6px 12px;
border-radius: 8px;
cursor: pointer;
width: 100px;
text-align: center;
`


const style = {
    activeFilterStyle: {
        color: 'white',
        fontWeight: 600
    },
    inactiveFilterStyle: {
        border: '1px solid #c4c4c4',
        color: '#575757'
    }
}

const ProductPage = () => {

    const [displayedData, setDisplayedData] = useState(Product_Data.filter(range => range.range === 'DeLuxe'))

    const [activeFilter, setActiveFilter] = useState('DeLuxe')

    useEffect(() => {
        const selectedRange = localStorage.getItem('selected-range')
        setDisplayedData(Product_Data.filter(range => range.range === selectedRange))
        setActiveFilter(localStorage.getItem('selected-range'))
    }, [])

    return (
        <Fragment>
            <Navbar/>
            <Container>
                {/* Filter Area */}
                <FilterContainer>
                    {Range_Data.map((data) => {
                        return (
                            <Filter 
                                id={data.id}
                                onMouseEnter={() => {
                                    if(activeFilter !== data.id) {
                                        document.getElementById(data.id).style.backgroundColor = data.backgroundColor
                                        document.getElementById(data.id).style.color = 'white'
                                        document.getElementById(data.id).style.fontWeight = '600'
                                    } 
                                }}
                                onMouseLeave={() => {
                                    if(activeFilter !== data.id) {
                                        document.getElementById(data.id).style.backgroundColor = ''
                                        document.getElementById(data.id).style.color = '#575757'
                                        document.getElementById(data.id).style.fontWeight = ''
                                    } 
                                }}
                                onClick={() => {
                                    localStorage.setItem('selected-range', data.id)
                                    setDisplayedData(Product_Data.filter(range => range.range === data.id))
                                    setActiveFilter(data.id)
                                }} 
                                style={activeFilter === data.id ? {...style.activeFilterStyle, backgroundColor: data.backgroundColor} : style.inactiveFilterStyle}
                            >
                                {data.range}
                            </Filter>
                        )
                    })}
                </FilterContainer>

                {/* Display product area */}
                {displayedData.map((data) => {
                    return (
                        <Product data={data}/>
                    )
                })}    
                
            </Container>
        </Fragment>
    )
}

export default ProductPage