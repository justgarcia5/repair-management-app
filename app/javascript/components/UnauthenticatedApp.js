import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <div>
        <h1>UnauthenticatedApp</h1>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/user_sign' component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default UnauthenticatedApp
