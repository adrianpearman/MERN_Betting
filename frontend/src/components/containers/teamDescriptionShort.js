import React from 'react'

const teamDescriptionShort = (props) => {
    let text
    text = props.text ? props.text : ''
    return (
        <p className='teamDescription'>
            {text.substr(0, 400)} ...<span onClick={props.clickHandler}>View More</span>
        </p>
    )
}

export default teamDescriptionShort