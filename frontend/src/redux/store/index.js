import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import betOddsAppReducer from '../reducers'  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    betOddsAppReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store