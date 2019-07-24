import React from 'react'
import './CollectionPreview.styles.scss'
import CollectionItem from '../CollectionItem/CollectionItem'
import { ICollectionItem } from '../../../models/models'

interface IProps {
  title: string
  items: ICollectionItem[]
  routeName?: string
}

const CollectionPreview: React.FC<IProps> = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item: ICollectionItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
