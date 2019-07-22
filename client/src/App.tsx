import React, { Fragment, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getCategoriesRequest, getPostsRequest } from './store/modules/shop/shopActions'
import { alexNameSelector } from './store/modules/shop/shopSelectors'
import './App.scss'

const Routes = React.lazy(() => import('./routes/routes'))

interface IProps {
  name?: string
  getPostsRequest: () => void
  getCategoriesRequest: () => void
}

const App: React.FC<IProps> = ({ name, getPostsRequest, getCategoriesRequest }) => {
  return (
    <Fragment>
      <h1>Cool {name} 1</h1>
      <button onClick={getCategoriesRequest}>req name</button>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default connect(
  (state) => ({
    name: alexNameSelector(state)
  }),
  { getPostsRequest, getCategoriesRequest }
)(App)
