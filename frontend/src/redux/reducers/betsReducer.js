import { 
    FETCH_BETS, 
    FETCH_SPORTS, 
    FETCH_ERROR,
    FETCH_SPORT_TEAM_1,
    FETCH_SPORT_TEAM_2 
} from '../actions/types'

const initialState = {
    fetchDataError: false,
    fetchDataErrorMessage: '',
    currentBets: [],
    currentSports: [],
    currentRegions: ['us', 'uk', 'au'],
    sportTeam1: [],
    sportTeam2: [],
}

export const betsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BETS:
            return {
                ...state,
                currentBets: action.payload.data
            }
        case FETCH_SPORTS:
            return {
                ...state,
                currentSports: action.payload.data
            }
        case FETCH_SPORT_TEAM_1:
            let teamsList1 = action.payload[0].data.teams
            let team1 = teamsList1.filter((team) => {
                return (
                    team.strAlternate === action.payload[1] || 
                    team.strTeam === action.payload[1] ||
                    team.strAlternate === action.payload[1].split(' ')[0] || 
                    team.strTeam === action.payload[1].split(' ')[0]
                )
            })

            return {
                ...state,
                sportTeam1: team1[0]
            }
        case FETCH_SPORT_TEAM_2:
            let teamsList2 = action.payload[0].data.teams
            let team2 = teamsList2.filter((team) => {
                return (
                    team.strAlternate === action.payload[1] || 
                    team.strTeam === action.payload[1] ||
                    team.strAlternate === action.payload[1].split(' ')[0] || 
                    team.strTeam === action.payload[1].split(' ')[0]
                )
            })
            return {
                ...state,
                sportTeam2: team2[0]
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchDataError: true,
                fetchDataErrorMessage: action.payload
            }
        default:
            return state
    }
}