import React from 'react'
import BetInputForm from './BetInputForm'
import RenderBets from './RenderBets'

const Homepage = () => {
    return(
        <div className='col-10 offset-1'>
            <BetInputForm />
            <RenderBets />      
        </div>
    )
}

export default Homepage