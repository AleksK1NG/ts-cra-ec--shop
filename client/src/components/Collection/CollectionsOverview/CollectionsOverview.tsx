import React from 'react'
import { connect } from 'react-redux'
import './CollectionsOverview.styles.scss'
import { AppState } from '../../../store/rootReducer'
import { collectionsSelector } from '../../../store/modules/shop/shopSelectors'
import { ISDataCollection } from '../../../store/modules/shop/shopData'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

interface IProps {
  collections: ISDataCollection[]
}

const CollectionsOverview: React.FC<IProps> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }: ISDataCollection) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    collections: collectionsSelector(state)
  }),
  null
)(CollectionsOverview)
