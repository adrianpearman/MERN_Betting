import axios from 'axios'
import { 
    FETCH_SPORTS, 
    FETCH_ERROR, 
    FETCH_BETS, 
    FETCH_SPORT_TEAM_1, 
    FETCH_SPORT_TEAM_2,
    TOGGLE_UI_CONTAINER1,
    TOGGLE_UI_CONTAINER2
} from './types'

export const fetchCurrentSportData = () => (dispatch) => {
    axios.get('/api/data/current/sports')
    .then((response) => {
        dispatch({
            type: FETCH_SPORTS,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_ERROR,
            payload: err
        })
    })
}

export const fetchCurrentSportBets = (requestData) => (dispatch) => {
    axios.post('/api/data/current/odds', requestData)
    .then((response) => {
        dispatch({
            type: FETCH_BETS,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_ERROR,
            payload: err
        })
    })
}

export const fetchSportTeamData = (team, teamPosition) => (dispatch) => {
    let sportsTeam = teamPosition === 1 ? FETCH_SPORT_TEAM_1 : FETCH_SPORT_TEAM_2

    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${team.split(' ')[0]}`)
        .then((response) => {
            dispatch({
                type: sportsTeam,
                payload: [response, team]
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: 'Unable to get information on this team... Please try again'
            })
        })
}

export const toggleUIContainer1 = () => (dispatch) => {
    dispatch({
        type: TOGGLE_UI_CONTAINER1
    })
}

export const toggleUIContainer2 = () => (dispatch) => {
    dispatch({
        type: TOGGLE_UI_CONTAINER2
    })
}