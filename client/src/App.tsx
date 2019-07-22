import React, { Fragment, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getCategoriesRequest, getCategoryItemsRequest, getPostsRequest } from './store/modules/shop/shopActions'
import { alexNameSelector } from './store/modules/shop/shopSelectors'
import './App.scss'

const Routes = React.lazy(() => import('./routes/routes'))

interface IProps {
  name?: string
  getPostsRequest: () => void
  getCategoriesRequest: () => void
  getCategoryItemsRequest: (categoryID: string) => void
}

const App: React.FC<IProps> = ({ name, getPostsRequest, getCategoriesRequest, getCategoryItemsRequest }) => {
  return (
    <Fragment>
      <h1>Cool {name} 1</h1>
      <button onClick={() => getCategoryItemsRequest('5d35b2281a4d3a4f87052595')}>req name</button>
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
  { getPostsRequest, getCategoriesRequest, getCategoryItemsRequest }
)(App)
