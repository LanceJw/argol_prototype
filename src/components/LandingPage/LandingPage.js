import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

import { ProductContext } from '../../Context/ProductContext'

const Container = styled.div`

`


const LandingPage = () => {
    const [currentRange, setCurrentRange] = useState("")

    const clickHandler = () => {
        setCurrentRange('DeLuxe')
    }


    
    return (
        <ProductContext.Provider value={{currentRange, setCurrentRange}}>
        <Container>
            <Navbar/>
            <a href='/products' onClick={clickHandler}>DeLuxe</a>
        </Container>
        </ProductContext.Provider>
    )   
}

export default LandingPage