import React from 'react'

const teamDescriptionLong = (props) => {
    let text
    text = props.text ? props.text : ''
    return(
        <p className='teamDescription'>
            {text}...<span onClick={props.clickHandler}>View Less</span>
        </p>
    )
}

export default teamDescriptionLong