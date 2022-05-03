import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Doce22 from './containers/Doce22'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Doce22} exact path="/#/doce22" />
      </Switch>
    </Router>
  )
}

export default Routes
