import React from 'react'

import './CartIcon.styles.scss'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'

interface IProps {
  toggleCartHidden: () => void
}

const CartIcon: React.FC<IProps> = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon)
