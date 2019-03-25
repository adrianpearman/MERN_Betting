// NPM Modules
import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Components
import Header from './Header'
import Homepage from './Homepage'
import IndividualBet from './IndividualBet'
// Redux Store
import store from '../redux/store'
// Styling
import '../assets/styles/styles.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Route path='/' exact component={Homepage} />
            <Route path='/bet/:id' component={IndividualBet}/>
          </Fragment>
        </Router>
      </Provider>
    )
  }       
}

export default App
