import React from 'react'
import styled from 'styled-components'


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
    // const displayData = Data.filter(test => test.range === currentRange)
        
    return (
        <div>
            {Data.map((data) => {
                return (
                    <h1>{data.text}</h1>
                )
            })}
        </div>
    )
}

export default ProductPage