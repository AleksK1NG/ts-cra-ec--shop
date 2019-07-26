import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { ShopPageContainer } from './ShopPage.styles'

const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)
const CollectionPage = React.lazy(() => import('../CollectionPage/CollectionPage'))

interface IProps extends RouteComponentProps {}

const ShopPage: React.FC<IProps> = ({ match }) => {
  return (
    <ShopPageContainer>
      <Suspense fallback={<p>Loading ...</p>}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Suspense>
    </ShopPageContainer>
  )
}

export default ShopPage
