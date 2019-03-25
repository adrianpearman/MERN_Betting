import { combineReducers } from 'redux'

import { betsReducer } from './betsReducer'
import { uiReducer } from './uiReducer'

const betOddsAppReducer = combineReducers({
    bets: betsReducer,
    ui: uiReducer
})

export default betOddsAppReducer
