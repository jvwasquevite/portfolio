import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Doce22 from './containers/Doce22'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Doce22} exact path="/doce22" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
