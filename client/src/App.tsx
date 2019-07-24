import React, { Fragment, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getCategoriesRequest, getCategoryItemsRequest, getPostsRequest } from './store/modules/shop/shopActions'
import { alexNameSelector } from './store/modules/shop/shopSelectors'
import './App.scss'
import Header from './components/Header/Header'

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
      <Header />
      <button onClick={getPostsRequest}>test</button>
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
