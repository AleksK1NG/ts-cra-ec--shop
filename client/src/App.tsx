import React, { Fragment, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { loadUserRequest } from './store/modules/auth/authActions'
import './App.scss'

const Routes = React.lazy(() => import('./routes/routes'))

interface IProps {
  loadUserRequest: () => void
}

const App: React.FC<IProps> = ({ loadUserRequest }) => {
  useEffect(() => {
    loadUserRequest()
  }, [loadUserRequest])

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default connect(
  null,
  { loadUserRequest }
)(App)
