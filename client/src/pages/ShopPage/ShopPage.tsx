import React, { Suspense, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { ShopPageContainer } from './ShopPage.styles'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { getCategoriesRequest } from '../../store/modules/shop/shopActions'
import { categoriesSelector } from '../../store/modules/shop/shopSelectors'
import { ICategory } from '../../models/models'
import Spinner from '../../components/Spinner/Spinner'

const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)
const CollectionPage = React.lazy(() => import('../CollectionPage/CollectionPage'))

interface IProps extends RouteComponentProps {
  getCategoriesRequest: () => void
  categories: ICategory[]
}

const ShopPage: React.FC<IProps> = ({ match, getCategoriesRequest, categories }) => {
  useEffect(() => {
    getCategoriesRequest()
  }, [getCategoriesRequest])

  if (!categories.length) return <Spinner />

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
      </Suspense>
    </ShopPageContainer>
  )
}

export default connect(
  (state: AppState) => ({
    categories: categoriesSelector(state)
  }),
  { getCategoriesRequest }
)(ShopPage)
