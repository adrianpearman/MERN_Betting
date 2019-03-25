// NPM Modules
import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Components
import LoadingSpinner from './containers/LoadingSpinner'

import { test } from '../testObject'
import { betsReducer } from '../redux/reducers/betsReducer';

class RenderBets extends Component{
    render(){
        let renderBets
        let currentBets = this.props.currentBets
        if(currentBets.length === 0){
            renderBets = <h3 className='renderBetsMessage'>Please Select a Sport</h3>
        }else{
            renderBets = currentBets.map((bet, index) => {
                let id = `${bet.teams[0]}+${bet.teams[1]}`
                return (
                    <div className='renderBets' key={index}>
                        <div className='oddsInfoContent'>
                            <Link
                                to={{
                                    pathname: `/bet/${id}`,
                                    state: { ...bet }
                                }}
                                className='infoContainer'
                            >
                                <h3 className='infoContent'>
                                    League: {bet.sport_nice}
                                </h3>
                                <h3 className='infoContent'>
                                    {bet.home_team} vs {bet.teams.filter(team => team !== bet.home_team)}
                                </h3>
                                <h3 className='infoContent'>
                                    Kick off time:
                                <br />
                                    {moment.unix(bet.commence_time).format('MMMM Do YYYY, h:mm:ss a')}
                                </h3>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
        return(
            <div className='renderBetsContainer'>
                <h2 className='currentBets'>Current Bets:</h2>
                { renderBets }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
       currentBets: state.bets.currentBets
    }
}

export default connect(mapStateToProps)(RenderBets)