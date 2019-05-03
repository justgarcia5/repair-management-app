import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from "./NavBar";

const Routes = () => {
  return <div>
    <NavBar />
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        {/* <Route path='/' component={NotFound} /> */}
      </Switch>
    </Router>
  </div>
}

export default Routes
