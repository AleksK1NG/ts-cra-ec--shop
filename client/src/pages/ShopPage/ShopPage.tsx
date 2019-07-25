import React from 'react'
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { collectionsSelector } from '../../store/modules/shop/shopSelectors'
import { ISDataCollection } from '../../store/modules/shop/shopData'

interface IProps {
  collections: ISDataCollection[]
}

const ShopPage: React.FC<IProps> = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }: ISDataCollection) => {
        return (
          <CollectionPreview
            key={id}
            title={otherProps.title}
            items={otherProps.items}
            routeName={otherProps.routeName}
          />
        )
      })}
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    collections: collectionsSelector(state)
  }),
  null
)(ShopPage)
