import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

import { useSelector, useDispatch} from 'react-redux'
import { DeLuxeRange } from '../../actions/Index'


const Container = styled.div`

`


const LandingPage = () => {

    const range = useSelector(state => state.range)
    const dispatch = useDispatch();
    
    return (
        <Container>
            <Navbar/>
            <a href='/products'>DeLuxe</a>
            <p onClick={() => dispatch(DeLuxeRange())}>DeLuxe</p>
            <p>WorkMaster</p>
            <h1>{range}</h1>
        </Container>
    )   
}

export default LandingPage