import React from 'react'

import { ICollectionItem } from '../../../models/models'
import { connect } from 'react-redux'
import { addCartItem, clearItemFromCart, deleteCartItem } from '../../../store/modules/cart/cartActions'

import './CheckoutItem.styles.scss'

interface IProps {
  cartItem: ICollectionItem
  addCartItem: (item: any) => void
  deleteCartItem: (item: any) => void
  clearItemFromCart: (item: any) => void
}

const CheckoutItem: React.FC<IProps> = ({ cartItem, deleteCartItem, clearItemFromCart, addCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default connect(
  null,
  { deleteCartItem, clearItemFromCart, addCartItem }
)(CheckoutItem)
