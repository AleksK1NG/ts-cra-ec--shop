import React from 'react'

import CustomButton from '../../Shared/CustomButton/CustomButton'
import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { cartItemsSelector } from '../../../store/modules/cart/cartSelectors'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'

import CartItem from '../CartItem/CartItem'
import './CartDropdown.styles.scss'

interface IProps extends RouteComponentProps {
  cartItems: any[]
  toggleCartHidden: () => void
}

const CartDropdown: React.FC<IProps> = ({ history, toggleCartHidden, cartItems }) => {
  const goCheckoutHandler = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default withRouter(
  connect(
    (state: AppState) => ({
      cartItems: cartItemsSelector(state)
    }),
    { toggleCartHidden }
  )(CartDropdown)
)
