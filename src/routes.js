import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Doce22 from './containers/Doce22'
import Checkout from './containers/Doce22/Checkout'
import Payment from './containers/Doce22/Checkout/Payment'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doce22" component={Doce22} />
        <Route exact path="/doce22/checkout" component={Checkout} />
        <Route exact path="/doce22/checkout/pay" component={Payment} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
