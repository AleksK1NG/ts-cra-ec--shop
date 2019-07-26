import React from 'react'

import { connect } from 'react-redux'
import { AppState } from '../../../store/rootReducer'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { cartItemsSelector } from '../../../store/modules/cart/cartSelectors'
import { toggleCartHidden } from '../../../store/modules/UI/uiActions'

import CartItem from '../CartItem/CartItem'
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton
} from './CartDropdown.styles'
import CustomButton from '../../Shared/CustomButton/CustomButton'

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
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={goCheckoutHandler}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
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
