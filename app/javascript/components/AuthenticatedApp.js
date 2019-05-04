import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import AllJobs from '../pages/AllJobs'
import Job from '../pages/Job'

const AuthenticatedApp = () => {
  return <div>
    <div>
        <h1>AuthenticatedApp</h1>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/all_jobs' exact component={AllJobs}/>
            <Route path='/job' exact component={Job}/>
          </Switch>
        </Router>
      </div>
  </div>
}

export default AuthenticatedApp
