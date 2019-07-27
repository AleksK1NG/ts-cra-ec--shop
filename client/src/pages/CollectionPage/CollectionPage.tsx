import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'
import { categoryUrlSelector } from '../../store/modules/shop/shopSelectors'
import { RouteComponentProps } from 'react-router'

import { CollectionTitle, CollectionPageContainer, CollectionItemsContainer } from './CollectionPage.styles'

interface MatchParams {
  collectionId: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  category: any
}

const CollectionPage: React.FC<IProps> = ({ category }) => {
  const { title, items } = category

  console.log('category COLLECTION PAGE => ', category)
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item: any) => (
          <CollectionItem key={item._id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default connect(
  (state: AppState, ownProps: IProps) => ({
    category: categoryUrlSelector(ownProps.match.params.collectionId)(state)
  }),
  null
)(CollectionPage)

// Type for match params /:collectionId
// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
