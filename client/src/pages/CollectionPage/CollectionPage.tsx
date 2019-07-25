import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'
import './CollectionPage.styles.scss'


interface IProps {
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

export default connect((state: AppState) => ({

}), null)(CollectionPage)
