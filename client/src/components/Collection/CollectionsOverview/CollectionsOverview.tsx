import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { categoriesSelector, collectionsSelector } from '../../../store/modules/shop/shopSelectors'
import { ISDataCollection } from '../../../store/modules/shop/shopData'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

interface IProps {
  collections: ISDataCollection[]
  categories: any
}

const CollectionsOverview: React.FC<IProps> = ({ collections, categories }) => {

  console.log('categories OVERVIEW PAGE => ', categories)
  return (
    <CollectionsOverviewContainer>
      {categories.map((category: any) => (
        <CollectionPreview key={category._id} {...category} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default connect(
  (state: AppState) => ({
    categories: categoriesSelector(state),
    collections: collectionsSelector(state)
  }),
  null
)(CollectionsOverview)
