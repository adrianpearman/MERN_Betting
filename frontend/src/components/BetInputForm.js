import React, { Component } from 'react' 
import { fetchCurrentSportData, fetchCurrentSportBets } from '../redux/actions'
import { connect } from 'react-redux'

class BetInputForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            betOption: '',
            region: '',
            regionError: false,
            betOptionError: false,
            submitError: false
        }
        this.handleBetOptionSelect = this.handleBetOptionSelect.bind(this)
        this.handleRegionOptionSelect = this.handleRegionOptionSelect.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    handleBetOptionSelect = (e) => {this.setState({ betOption: e.target.value })}

    handleRegionOptionSelect = (e) => {this.setState({ region: e.target.value })}

    onSubmitHandler = (e) => {
        e.preventDefault()
        if (this.state.betOption === '' && this.state.region === '') {
            this.setState({
                betOptionError: false,
                regionError: false,
                submitError: true
            })
        } else if (this.state.betOption === '') {
            this.setState({
                betOptionError: true,
                regionError: false,
                submitError: false
            })
        } else if (this.state.region === '') {
            this.setState({
                betOptionError: false,
                regionError: true,
                submitError: false
            })
        } else {
            this.setState({
                betOptionError: false,
                regionError: false,
                submitError: false
            })
            const betOptionRequest = {
                sport: this.state.betOption,
                region: this.state.region,
            }
            this.props.fetchCurrentSportBets(betOptionRequest)
        }
    }

    componentDidMount(){ this.props.fetchCurrentSportData() }

    render() {
        let betErrorMessage = this.state.betOptionError === true ? <div className='errorMessage'>Error: Please Select a Bet</div> : null
        let regionErrorMessage = this.state.regionError === true ? <div className='errorMessage'>Error: Please Select a Region</div> : null
        let submitErrorMessage = this.state.submitError === true ? <div className='errorMessage'>Error: Please Select a Bet and Region</div> : null

        let regionOptions = this.props.bets.currentRegions.map((option, index) => {
            let optionTitle 
            if(option === 'uk'){optionTitle = 'United Kingdom'}
            else if(option === 'us'){optionTitle = 'United States'}
            else if(option === 'au'){optionTitle = 'Australia'}

            return ( <option key={index} value={option}>{optionTitle}</option> )
        })

        let sportOptions = this.props.bets.currentSports.map((sport, index) => {
            if(sport.active === false){
                return null
            }else{
                return <option key={index} value={sport.key}>{sport.title}</option>
            }
        })
            
         return (
            <div>
                <form className='betInputForm'>
                    <div className='form-group mb-4 mt-4'>
                        <label>Bets</label>
                        {betErrorMessage}
                        {regionErrorMessage}
                        {submitErrorMessage}
                        <select
                            className='form-control input'
                            name="bets"
                            onChange={this.handleBetOptionSelect}
                        >
                            <option value="">Select a Sport</option>
                            { sportOptions }
                        </select>
                    </div>
                    <div className='form-group mb-4 mt-4'>
                        <label>Betting Region</label>
                        <select
                            className='form-control input'
                            name='region'
                            onChange={this.handleRegionOptionSelect}
                        >
                            <option value=''>Select a Betting Region</option>
                            {regionOptions}
                        </select>
                    </div>
                    <div className='form-group mb-4 mt-4'>
                        <button className='btn btn-primary submitButton' onClick={this.onSubmitHandler}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        bets: state.bets
    }
}

export default connect(mapStateToProps, { fetchCurrentSportData, fetchCurrentSportBets })(BetInputForm)