import React from 'react'

import './CartIcon.styles.scss'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'
import { AppState } from '../../../store/rootReducer'
import { cartItemsCountSelector } from '../../../store/modules/cart/cartSelectors'

interface IProps {
  toggleCartHidden: () => void
  itemCount: number
}

const CartIcon: React.FC<IProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    itemCount: cartItemsCountSelector(state)
  }),
  { toggleCartHidden }
)(CartIcon)
