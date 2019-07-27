import React, { Suspense, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { ShopPageContainer } from './ShopPage.styles'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { getCategoriesRequest } from '../../store/modules/shop/shopActions'

const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)
const CollectionPage = React.lazy(() => import('../CollectionPage/CollectionPage'))

interface IProps extends RouteComponentProps {
  getCategoriesRequest: () => void
}

const ShopPage: React.FC<IProps> = ({ match, getCategoriesRequest }) => {
  useEffect(() => {
    getCategoriesRequest()
  }, [getCategoriesRequest])

  return (
    <ShopPageContainer>
      <Suspense fallback={<p>Loading ...</p>}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Suspense>
    </ShopPageContainer>
  )
}


export default connect((state: AppState) => ({

}), {getCategoriesRequest})(ShopPage)
