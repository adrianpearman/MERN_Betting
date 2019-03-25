// Modules
import React, { Component } from 'react' 
import { connect } from 'react-redux' 
import { fetchSportTeamData, toggleUIContainer1, toggleUIContainer2 } from '../redux/actions'
import LoadingSpinner from './containers/LoadingSpinner'
import IndividualTeamContainer from './containers/individualTeamContainer'

// Components 


class IndividualBet extends Component{
    componentDidMount(){
        this.props.fetchSportTeamData(this.props.location.state.teams[0], 1)
        this.props.fetchSportTeamData(this.props.location.state.teams[1], 2)
    }
    render(){
        return (
            <div className='row'>
                <IndividualTeamContainer 
                    data={this.props.bets.sportTeam1}
                    ui={this.props.ui.viewInfoTeam1}
                    clickHandler={this.props.toggleUIContainer1}
                    bets={this.props.location.state.sites}
                />
                <IndividualTeamContainer 
                    data={this.props.bets.sportTeam2}
                    ui={this.props.ui.viewInfoTeam2}
                    clickHandler={this.props.toggleUIContainer2}
                    bets={this.props.location.state.sites}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bets: state.bets,
        ui: state.ui
    }
}

const actions = {
    fetchSportTeamData, 
    toggleUIContainer1,
    toggleUIContainer2
}

export default connect(mapStateToProps, actions)(IndividualBet)