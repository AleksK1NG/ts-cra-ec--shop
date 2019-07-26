import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { cartItemsSelector, cartItemsTotalSelector } from '../../store/modules/cart/cartSelectors'
import CheckoutItem from '../../components/Checkout/CheckoutItem/CheckoutItem'
import { ICollectionItem } from '../../models/models'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'
import './CheckoutPage.styles.scss'

interface IProps {
  cartItems: ICollectionItem[]
  total: number
}

const CheckoutPage: React.FC<IProps> = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    cartItems: cartItemsSelector(state),
    total: cartItemsTotalSelector(state)
  }),
  null
)(CheckoutPage)
