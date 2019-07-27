import React from 'react'

import { IItem } from '../../../models/models'
import { connect } from 'react-redux'
import { addCartItem, clearItemFromCart, deleteCartItem } from '../../../store/modules/cart/cartActions'

import {
  CheckoutItemContainer,
  TextContainer,
  RemoveButtonContainer,
  QuantityContainer,
  ImageContainer
} from './CheckoutItem.styles'

interface IProps {
  cartItem: IItem
  addCartItem: (item: IItem) => void
  deleteCartItem: (item: IItem) => void
  clearItemFromCart: (item: IItem) => void
}

const CheckoutItem: React.FC<IProps> = ({ cartItem, deleteCartItem, clearItemFromCart, addCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => deleteCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default connect(
  null,
  { deleteCartItem, clearItemFromCart, addCartItem }
)(CheckoutItem)
