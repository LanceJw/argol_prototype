import React from 'react'


const Data = [
    {
        range: 'ContractorGrade',
        text: 'This is ContractorGrade'
    },
    {
        range: 'DeLuxe',
        text: 'This is DeLuxe'
    },
    {
        range: 'Classic',
        text: 'This is Classic'
    },
    {
        range: 'JobMaster',
        text: 'This is JobMaster'
    },
    {
        range: 'WorkMaster',
        text: 'This is WorkMaster'
    },
    {
        range: 'TaskMaster',
        text: 'This is TaskMaster'
    },
    {
        range: 'AllMaster',
        text: 'This is AllMaster'
    },
]

const ProductPage = () => {

    const selectedRange = localStorage.getItem('selected-range')

    const displayData = Data.filter(range => range.range === selectedRange) 
    
    console.log(selectedRange)
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