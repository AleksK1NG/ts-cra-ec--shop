import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { categoriesSelector } from '../../../store/modules/shop/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

interface IProps {
  categories: any
}

const CollectionsOverview: React.FC<IProps> = ({ categories }) => {
  // console.log('categories OVERVIEW PAGE => ', categories)
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
    categories: categoriesSelector(state)
  }),
  null
)(CollectionsOverview)
