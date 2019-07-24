import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../../store/modules/cart/cartActions'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { ICollectionItem } from '../../../models/models'

import './CollectionItem.styles.scss'

interface IProps {
  item: ICollectionItem
  addCartItem: (item: any) => void
}

const CollectionItem: React.FC<IProps> = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item

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
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default connect(
  null,
  { addCartItem }
)(CollectionItem)
