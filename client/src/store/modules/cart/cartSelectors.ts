import { createSelector } from 'reselect'
import { AppState } from '../../rootReducer'
import { CartState } from './cartReducer'

/**
 * Selectors
 * */

export const cartStateSelector = (state: AppState) => state.cart

export const cartItemsSelector = createSelector(
  cartStateSelector,
  (state: CartState) => state.cartItems
)

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
)

export const cartItemsTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
)
