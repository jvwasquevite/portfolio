import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" />
    </BrowserRouter>
  )
}

export default Routes
