import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import './ShopPage.styles.scss'

const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)

interface IProps extends RouteComponentProps {}

const ShopPage: React.FC<IProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Suspense fallback={<p>Loading ...</p>}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
      </Suspense>
    </div>
  )
}

export default ShopPage
