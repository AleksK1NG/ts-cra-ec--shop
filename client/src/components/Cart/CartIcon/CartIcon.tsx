import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'
import { AppState } from '../../../store/rootReducer'
import { cartItemsCountSelector } from '../../../store/modules/cart/cartSelectors'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIcon.styles'

interface IProps {
  toggleCartHidden: () => void
  itemCount: number
}

const CartIcon: React.FC<IProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  )
}

export default connect(
  (state: AppState) => ({
    itemCount: cartItemsCountSelector(state)
  }),
  { toggleCartHidden }
)(CartIcon)
