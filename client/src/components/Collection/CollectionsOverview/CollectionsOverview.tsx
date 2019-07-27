import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { categoriesSelector, shopLoadingSelector } from '../../../store/modules/shop/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'
import { ICategory } from '../../../models/models'
import WithSpinner from '../../HOC/WithSpinner/WithSpinner'

interface IProps {
  categories: ICategory[]
  isLoading: boolean
}

const CollectionsOverview: React.FC<IProps> = ({ categories, isLoading }) => {
  return (
    <CollectionsOverviewContainer>
      {categories.map((category: ICategory) => (
        <CollectionPreview key={category._id} {...category} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default compose(
  connect(
    (state: AppState) => ({
      categories: categoriesSelector(state),
      isLoading: shopLoadingSelector(state)
    }),
    null
  ),
  WithSpinner
)(CollectionsOverview) as React.ComponentType<any>
