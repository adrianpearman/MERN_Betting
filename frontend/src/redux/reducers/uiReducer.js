import { TOGGLE_UI_CONTAINER1, TOGGLE_UI_CONTAINER2 } from '../actions/types'

const initialState = {
    viewInfoTeam1: false, 
    viewInfoTeam2: false 
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_UI_CONTAINER1:
            return {
                ...state,
                viewInfoTeam1: !state.viewInfoTeam1
            }
        case TOGGLE_UI_CONTAINER2:
            return {
                ...state,
                viewInfoTeam2: !state.viewInfoTeam2
            }
        default: 
            return state
    }
}