import React from 'react'
import { ICollectionItem } from '../../../models/models'
import { CartItemImage, CartItemContainer, ItemDetailsContainer } from './CartItem.styles'

interface IProps {
  item: ICollectionItem
}

const CartItem: React.FC<IProps> = ({ item: { id, imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem
