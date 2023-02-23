import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar/Navbar'
import Product from './Product'
import { Product_Data } from './Product_Data'
import { Range_Data } from '../LandingPage/Range_Data'
import Footer from '../Footer/Footer'
import AllMasterProduct from './AllMasterProduct'
import {TfiAngleDoubleRight} from 'react-icons/tfi'


// CSS For Desktop View

const FilterContainer = styled.div`
display: flex;
flex-direction: row;
width: 75%;
max-width: 1100px;
margin: 0rem auto 1.8rem;
justify-content: space-between;
`

const Filter = styled.p`
letter-spacing: 0.3px;
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


// CSS For Mobile View
const MobileFilterContainer = styled.div`
width: 90%;
border: 1px solid #a8a8a8;
margin: 0rem auto 1.2rem;
border-radius: 10px;
height: 42px;
display: flex;
align-items: center;
`

const MobileFilter = styled.span`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 18px;
font-size: 20px;
`

const DropdownFilterMenu = styled.div`
display: none;
flex-direction: column;
width: 90%;
margin: auto;
background-color: white;
position: absolute;
left: 19px;
top: 42px;
gap: 15px;
padding: 15px 0px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border: 1px solid #a8a8a8;
`

const MobileHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
font-size: 22px;
letter-spacing: 0.8px;
height: 65px;
background: linear-gradient(to right, rgba(246, 185, 17, 0.9), rgba(228, 106, 30, 0.9), rgba(216, 31, 31, 0.8), rgba(229, 119, 31, 0.9));
color: white;
font-weight: 600;
border-radius: 8px;
margin: 0rem auto 3rem;
`


const style = {
    activeFilterStyle: {
        color: 'white',
        fontWeight: 600,
        border: '1px solid'
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
    MobileAllMasterRange: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    },
    displayAllMasterHead: {
        display: 'flex'
    },
    hideAllMasterHead: {
        display: 'none'
    },
    showDropdown: {
        display: 'flex'
    },
    hideDropdown: {
        display: 'none'
    },
    removeBorderRadius: {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px'
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
            <Fragment>
                <Navbar />
                {/* Filter Area */}
                <FilterContainer>
                    {Range_Data.map((data) => {
                        return (
                            <Filter
                                id={data.id}
                                onMouseEnter={() => {
                                    if (activeFilter !== data.id) {
                                        document.getElementById(data.id).style.backgroundColor = data.backgroundColor
                                        document.getElementById(data.id).style.color = 'white'
                                        document.getElementById(data.id).style.fontWeight = '600'
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (activeFilter !== data.id) {
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
                                style={activeFilter === data.id ? { ...style.activeFilterStyle, backgroundColor: data.backgroundColor } : style.inactiveFilterStyle}
                            >
                                {data.range}<sub style={{ fontSize: '12px', fontStyle: 'italic', fontWeight: 'bold' }}>{data.rangeSubValue}</sub>
                            </Filter>
                        )
                    })}
                </FilterContainer>

                <Header style={{ ...(activeFilter === 'AllMaster') ? style.displayAllMasterHead : style.hideAllMasterHead }}>
                    <span>AllMaster Paint Roller Frames</span>
                </Header>
                <div style={{ ...(activeFilter === 'AllMaster') ? style.AllMasterRange : style.otherRange }}>
                    {/* Display product area */}

                    {displayedData.map((data) => {

                        // This is required because AllMaster product has a special arrangement for its items.

                        if (activeFilter === 'AllMaster') {
                            return (
                                <AllMasterProduct data={data} />
                            )
                        } else {
                            return (
                                <Product data={data} />
                            )
                        }
                    })}
                </div>

                <Footer />
            </Fragment>
        )
    }

    // Mobile View

    const [showDropdown, setShowDropdown] = useState(false)

    const DisplayMobile = () => {
        const renderFilterMenu = () => {
            setShowDropdown(!showDropdown)
        }

        const outsideClick = (e) => {
            if(showDropdown && e.getElementById !== "DropdownFilterMenu") {
                setShowDropdown(!showDropdown)
            }
        }

        return (
            <div onClick={outsideClick}>
                <Navbar />
                {/* Filter Area */}
                <div style={{position: 'relative'}}>
                    <MobileFilterContainer 
                        onClick={renderFilterMenu}
                        style={{...(showDropdown ? style.removeBorderRadius : null)}}
                    >
                        
                        <MobileFilter>{activeFilter}<TfiAngleDoubleRight style={{fontSize: '18px', paddingRight: '20px'}} /></MobileFilter>

                    </MobileFilterContainer>

                    <DropdownFilterMenu id="DropdownFilterMenu"
                        style={{...(showDropdown ? style.showDropdown : style.hideDropdown )}}
                    >
                        {Range_Data.map((data) => {
                            return (
                                <MobileFilter onClick={() => {
                                    localStorage.setItem('selected-range', data.id)
                                    setDisplayedData(Product_Data.filter(range => range.range === data.id))
                                    setActiveFilter(data.id)
                                }}>{data.range}</MobileFilter>
                            )
                        })}
                    </DropdownFilterMenu>
                </div>

                <MobileHeader style={{ ...(activeFilter === 'AllMaster') ? style.displayAllMasterHeadMobile : style.hideAllMasterHead }}>
                    <span>AllMaster Paint Roller Frames</span>
                </MobileHeader>
                <div style={{ ...(activeFilter === 'AllMaster') ? style.MobileAllMasterRange : style.otherRange }}>
                    {/* Display product area */}

                    {displayedData.map((data) => {

                        // This is required because AllMaster product has a special arrangement for its items.

                        if (activeFilter === 'AllMaster') {
                            return (
                                <AllMasterProduct data={data} />
                            )
                        } else {
                            return (
                                <Product data={data} />
                            )
                        }
                    })}
                </div>

                <Footer />
            </div>
        )
    }


    return (
        <Fragment>
            {mobileView ? DisplayMobile() : DisplayDesktop()}
        </Fragment>
    )
}

export default ProductPage