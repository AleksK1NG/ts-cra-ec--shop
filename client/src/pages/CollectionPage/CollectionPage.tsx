import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'
import { collectionUrlSelector } from '../../store/modules/shop/shopSelectors'
import './CollectionPage.styles.scss'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
  collectionId: string
}

interface IProps extends RouteComponentProps<MatchParams> {
  collection: any
}

const CollectionPage: React.FC<IProps> = ({ collection }) => {
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default connect(
  (state: AppState, ownProps: IProps) => ({
    collection: collectionUrlSelector(ownProps.match.params.collectionId)(state)
  }),
  null
)(CollectionPage)

// Type for match params /:collectionId
// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
