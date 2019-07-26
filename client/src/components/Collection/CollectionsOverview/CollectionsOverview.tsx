import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { collectionsSelector } from '../../../store/modules/shop/shopSelectors'
import { ISDataCollection } from '../../../store/modules/shop/shopData'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

interface IProps {
  collections: ISDataCollection[]
}

const CollectionsOverview: React.FC<IProps> = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }: ISDataCollection) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default connect(
  (state: AppState) => ({
    collections: collectionsSelector(state)
  }),
  null
)(CollectionsOverview)
