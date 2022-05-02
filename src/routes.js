import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Doce22 from './containers/Doce22'

const Routes = () => {
  return (
    <Router baseline="/">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Doce22} exact path="/doce22" />
      </Switch>
    </Router>
  )
}

export default Routes
