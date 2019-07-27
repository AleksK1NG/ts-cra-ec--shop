import React, { Fragment, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { loadUserRequest } from './store/modules/auth/authActions'
import Header from './components/Header/Header'
import { GlobalStyle } from './globalStyles'
import Spinner from './components/Spinner/Spinner'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

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
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route component={Routes} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  )
}

export default connect(
  null,
  { loadUserRequest }
)(App)
