import React from 'react'
import './CollectionItem.styles.scss'

interface IProps {
  id?: number | string
  imageUrl: string
  name: string
  price: number
}

const CollectionItem: React.FC<IProps> = ({ imageUrl, name, price, id }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
