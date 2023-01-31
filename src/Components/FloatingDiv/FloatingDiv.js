import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ image, text, text1 }) => {
    return (
        <div className='floatinDiv'>
            <img src={image} alt={image} />
            <span>
                {text}
                <br />
                {text1}
            </span>

        </div>
    )
}

export default FloatingDiv