import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'
import { categoryUrlSelector } from '../../store/modules/shop/shopSelectors'
import { RouteComponentProps } from 'react-router'

import { CollectionTitle, CollectionPageContainer, CollectionItemsContainer } from './CollectionPage.styles'
import { ICategory, IItem } from '../../models/models'
import Spinner from '../../components/Spinner/Spinner'

interface MatchParams {
  collectionId: string
  categoryId: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  category?: ICategory
}

const CollectionPage: React.FC<IProps> = ({ category }) => {
  if (!category) return <Spinner />

  const { title, items } = category
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item: IItem) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default connect(
  (state: AppState, ownProps: IProps) => ({
    category: categoryUrlSelector(ownProps.match.params.categoryId)(state)
  }),
  null
)(CollectionPage)

// Type for match params /:collectionId
// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
