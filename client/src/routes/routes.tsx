import React from 'react'

import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'))
const SignInAndSignUpPage = React.lazy(() => import('../pages/SignInAndSignUpPage/SignInAndSignUpPage'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </Switch>
  )
}

export default Routes
