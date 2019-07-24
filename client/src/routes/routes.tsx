import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../store/rootReducer'
import { userSelector } from '../store/modules/auth/authSelectors'
import { IUser } from '../models/models'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const ShopPage = React.lazy(() => import('../pages/ShopPage/ShopPage'))
const SignInAndSignUpPage = React.lazy(() => import('../pages/SignInAndSignUpPage/SignInAndSignUpPage'))

interface IProps {
  user: IUser | null
}

const Routes: React.FC<IProps> = ({ user }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" render={() => (user ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
    </Switch>
  )
}

export default connect(
  (state: AppState) => ({
    user: userSelector(state)
  }),
  null
)(Routes)
