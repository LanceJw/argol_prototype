import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { ProductContext } from '../../Context/ProductContext'


const Data = [
    {
        range: 'DeLuxe',
        text: 'This is DeLuxe'
    },
    {
        range: 'WorkMaster',
        text: 'This is WorkMaster'
    }
]

const ProductPage = () => {
    const {currentRange} = useContext(ProductContext)

    const displayData = Data.filter(test => test.range === currentRange)

    console.log(currentRange)
    console.log(displayData)
        
    return (
        <div>
            {displayData.map((data) => {
                return (
                    <h1>{data.text}</h1>
                )
            })}
        </div>
    )
}

export default ProductPage