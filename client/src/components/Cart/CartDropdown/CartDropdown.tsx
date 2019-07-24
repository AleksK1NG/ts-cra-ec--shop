import React from 'react'

import CustomButton from '../../Shared/CustomButton/CustomButton'
import './CartDropdown.styles.scss'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { cartItemsSelector, cartItemsTotalSelector } from '../../../store/modules/cart/cartSelectors'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'

interface IProps extends RouteComponentProps {
  cartItems: any[]
  totalCost: number
  toggleCartHidden: () => void
}

const CartDropdown: React.FC<IProps> = ({ history, toggleCartHidden, cartItems, totalCost }) => {
  const goCheckoutHandler = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default withRouter(
  connect(
    (state: AppState) => ({
      cartItems: cartItemsSelector(state),
      totalCost: cartItemsTotalSelector(state)
    }),
    { toggleCartHidden }
  )(CartDropdown)
)
