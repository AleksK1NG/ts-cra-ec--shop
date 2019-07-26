import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { cartItemsSelector, cartItemsTotalSelector } from '../../store/modules/cart/cartSelectors'
import CheckoutItem from '../../components/Checkout/CheckoutItem/CheckoutItem'
import { ICollectionItem } from '../../models/models'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'

import {
  CheckoutPageContainer,
  TotalContainer,
  HeaderBlockContainer,
  CheckoutHeaderContainer,
  WarningContainer
} from './CheckoutPage.styles'

interface IProps {
  cartItems: ICollectionItem[]
  total: number
}

const CheckoutPage: React.FC<IProps> = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  )
}

export default connect(
  (state: AppState) => ({
    cartItems: cartItemsSelector(state),
    total: cartItemsTotalSelector(state)
  }),
  null
)(CheckoutPage)
