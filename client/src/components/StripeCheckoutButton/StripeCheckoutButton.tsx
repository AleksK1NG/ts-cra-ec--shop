import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { stripePaymentRequest } from '../../store/modules/shop/shopActions'
import { IPaymentData } from '../../models/models'

interface IProps {
  price: number
  stripePaymentRequest: (paymentData: IPaymentData) => void
}

const StripeCheckoutButton: React.FC<IProps> = ({ price, stripePaymentRequest }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_LTPsxTlZIIXFQlB8FrLIDjco'

  const onToken = (token: any) => {
    console.log('stripe token => ', token)

    const paymentData = {
      amount: priceForStripe,
      token: token
    }
    debugger
    stripePaymentRequest(paymentData)
  }

  return (
    <StripeCheckout
      name="E-commerce"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      currency="USD"
      label="Pay Now"
      panelLabel="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      stripeKey={publishableKey}
      token={onToken}
    />
  )
}

export default connect(
  null,
  { stripePaymentRequest }
)(StripeCheckoutButton)
