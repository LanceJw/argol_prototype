import React from 'react'
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

import Navbar from '../Navbar/Navbar'
import Furst from '../../assets/FurstLogo.png'

// React Redux Imports
// import { useSelector, useDispatch} from 'react-redux'
// import { DeLuxeRange, ClassicRange, JobMasterRange, WorkMasterRange, TaskMasterRange, AllMasterRange, ContractorGradeRange } from '../../actions/Index'


// Data imports
import { Range_Data } from './Range_Data'


const Container = styled.div`
height: 100vh;
position: relative;
background-image: url(/BackgroundDesign.png);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const RangeContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
gap: 12px;
width: 32%;
max-width: 1100px;
margin: 2.5rem auto 0rem;
`

const Range = styled.a`
padding: 8px 12px;
background-color: red;
width: 30%;
text-align: center;
border-radius: 8px;
text-decoration: none;
color: white;
font-weight: 600;
`

const Quote = styled.div`
text-align: center;
margin-top: 3rem;
font-size: 24px;
letter-spacing: 1px;
font-weight: 600;
`

const Categories = styled.div`
margin-top: 3rem;
text-align: center;
font-size: 21px;
font-weight: 500;
letter-spacing: 1px;
`

const FurstLogo = styled.img`
width: 30%;
margin-left: 14px;
`

const LandingPage = () => {

    // No longer need Redux for my simple case
    // const handler = (data) => {
    //     switch(data.id) {
    //         case 'ContractorGrade':
    //             return dispatch(ContractorGradeRange())
    //         case 'DeLuxe':
    //             return dispatch(DeLuxeRange())
    //         case 'Classic':
    //             return dispatch(ClassicRange())
    //         case 'JobMaster':
    //             return dispatch(JobMasterRange())
    //         case 'WorkMaster':
    //             return dispatch(WorkMasterRange())
    //         case 'TaskMaster':
    //             return dispatch(TaskMasterRange())
    //         case 'AllMaster':
    //             return dispatch(AllMasterRange())
    //         default:
    //             return null;
    //     }
    // }


    // const range = useSelector(state => state.range)
    // const dispatch = useDispatch();

    return (
        <Container>
            <Navbar/>
            <Quote>
                <span>Before You Start, Think Of The Finish</span>
            </Quote>
            <RangeContainer>
                {Range_Data.map((data) => {
                    return (
                            <Range href='/products' key={data.id} 
                            style={{backgroundColor: data.backgroundColor, color: data.color}}
                            onClick={() => {
                                // handler(data)
                                localStorage.setItem('selected-range', data.id)
                            }}>{data.range}<sub style={{fontSize: '12px', fontStyle: 'italic', fontWeight: 'bold'}}>{data.rangeSubValue}</sub></Range>
                            )
                        })}
                <FurstLogo src={Furst} alt="Furst Logo "/>
            </RangeContainer>
            <Categories>
                <span>Paint Brushes <BsDot style={{verticalAlign: 'bottom'}}/> Paint Rollers <BsDot style={{verticalAlign: 'bottom'}}/> Painting Tools</span>
            </Categories>
        </Container>
    )   
}

export default LandingPage