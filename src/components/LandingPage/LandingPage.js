import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

// React Redux Imports
// import { useSelector, useDispatch} from 'react-redux'
// import { DeLuxeRange, ClassicRange, JobMasterRange, WorkMasterRange, TaskMasterRange, AllMasterRange, ContractorGradeRange } from '../../actions/Index'


// Data imports
import { Range_Data } from './Range_Data'


const Container = styled.div`
position: relative;
`

const Content = styled.div`
width: 100%;
background-image: url(/BackgroundDesign.png);
background-size: cover;
height: 75vh;
`


const RangeContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 12px;
width: 75%;
max-width: 1100px;
margin: 2rem auto 0rem;
`

const Range = styled.a`
padding: 8px 12px;
background-color: red;
width: 10%;
text-align: center;
border-radius: 8px;
text-decoration: none;
color: white;
font-weight: 600;
`

// const BackgroundImage = styled.img`
// position: absolute;
// height: 90vh;
// width: 100%;
// `


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
            {/* <BackgroundImage src={BackgroundDesign}/>    */}
            <Content>
                <RangeContainer>
                    {Range_Data.map((data) => {
                        return (
                                <Range href='/products' key={data.id} 
                                style={{backgroundColor: data.backgroundColor, color: data.color}}
                                onClick={() => {
                                    // handler(data)
                                    localStorage.setItem('selected-range', data.id)
                                }}>{data.range}</Range>
                                )
                            })}
                </RangeContainer>
            </Content>
        </Container>
    )   
}

export default LandingPage