import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'
import Product from './Product'
import { Product_Data } from './Product_Data'
import { Range_Data } from '../LandingPage/Range_Data'
import Footer from '../Footer/Footer'
import AllMasterProduct from './AllMasterProduct'


const FilterContainer = styled.div`
display: flex;
flex-direction: row;
width: 75%;
max-width: 1100px;
margin: 0rem auto 1.8rem;
justify-content: space-between;
`

const Filter = styled.p`
letter-spacing: 0.5px;
padding: 6px 12px;
border-radius: 8px;
cursor: pointer;
width: 115px;
text-align: center;
`

const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 75%;
max-width: 1100px;
font-size: 32px;
letter-spacing: 0.8px;
height: 80px;
background: linear-gradient(to right, rgba(246, 185, 17, 0.9), rgba(228, 106, 30, 0.9), rgba(216, 31, 31, 0.8), rgba(229, 119, 31, 0.9));
color: white;
font-weight: 600;
border-radius: 8px;
margin: 0rem auto 3rem;
`


const style = {
    activeFilterStyle: {
        color: 'white',
        fontWeight: 600
    },
    inactiveFilterStyle: {
        border: '1px solid #c4c4c4',
        color: '#575757'
    },
    otherRange: {
        display: 'flex',
        flexDirection: 'column',
    },
    AllMasterRange: {
        width: '75%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        margin: 'auto',
        maxWidth: '1100px'
    },
    displayAllMasterHead: {
        display: 'flex'
    },
    hideAllMasterHead: {
        display: 'none'
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
                            {data.range}<sub>{data.rangeSubValue}</sub>
                        </Filter>
                    )
                })}
            </FilterContainer>

            <Header style={{...(activeFilter === 'AllMaster') ? style.displayAllMasterHead : style.hideAllMasterHead}}>
                <span>AllMaster Paint Roller Frames</span>
            </Header>
            <div style={{...(activeFilter === 'AllMaster') ? style.AllMasterRange : style.otherRange}}>
                {/* Display product area */}

                {displayedData.map((data) => {

                    // This is required because AllMaster product has a special arrangement for its items.

                    if(activeFilter === 'AllMaster') {
                        return (
                            <AllMasterProduct data={data}/>
                        )
                    } else {
                        return (
                            <Product data={data}/>
                        )
                    }
                })}    
            </div>
            
            <Footer/>
        </Fragment>
    )
}

export default ProductPage