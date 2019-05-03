import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from '../pages/Home'

const routes = () => {
  return <Router>
    <Route path='/' exact component={Home}/>
  </Router>
}

export default routes
