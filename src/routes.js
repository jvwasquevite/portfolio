import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./containers/Home"
import Job from "./containers/Job"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vagas/:company" component={Job} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
