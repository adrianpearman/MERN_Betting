import React from 'react' 
import moment from 'moment'

const RenderOddsContainer = (props, index) => {
    return (
        <div key={index} className='odds'>
            <h3>{props.site_nice}</h3>
            <h4>Current Odds</h4>
            <p>Home Team: <b>{props.odds.h2h[0]}</b></p>
            <p>Away Team: <b>{props.odds.h2h[1]}</b></p>
            <p>Draw: <b>{props.odds.h2h[2]}</b></p>
            <p>Last updated: {moment.unix(props.last_update).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    )
}

export default RenderOddsContainer