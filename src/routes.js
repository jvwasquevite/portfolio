import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Home from './containers/Home'
import Doce22 from './containers/Doce22'
import Checkout from './containers/Doce22/Checkout'
import Payment from './containers/Doce22/Checkout/Payment'
import Tinder from './containers/Doce22/Tinder'
import Cards from './containers/Doce22/Tinder/Cards'
import SignUp from './containers/Doce22/Tinder/SignUp'
import Profile from './containers/Doce22/Tinder/Profile'
import Filters from './containers/Doce22/Tinder/Filters'
import Update from './containers/Doce22/Tinder/Profile/Update'

export const UserContext = createContext()

const Routes = () => {
  const [filter, setFilter] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doce22" component={Doce22} />
        <Route exact path="/doce22/checkout" component={Checkout} />
        <Route exact path="/doce22/checkout/pay" component={Payment} />
        <UserContext.Provider value={{ filter, setFilter, isAuth, setIsAuth }}>
          <Route exact path="/doce22/tinder" component={Tinder} />
          <Route exact path="/doce22/tinder/signup" component={SignUp} />
          <Route exact path="/doce22/tinder/cards" component={Cards} />
          <Route exact path="/doce22/tinder/filters" component={Filters} />
          <Route exact path="/doce22/tinder/profile" component={Profile} />
          <Route
            exact
            path="/doce22/tinder/profile/update"
            component={Update}
          />
          {localStorage.getItem('user') && (
            <Redirect to="/doce22/tinder/cards" />
          )}
          {filter !== '' && <Redirect to="/doce22/tinder/cards" />}
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
