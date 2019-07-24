import { CartAction, CartTypes } from './types'

export const addCartItem = (item: any): CartAction => ({
  type: CartTypes.ADD_CART_ITEM,
  payload: { item }
})

export const deleteCartItem = (item: any): CartAction => ({
  type: CartTypes.DELETE_CART_ITEM,
  payload: { item }
})

export const clearItemFromCart = (item: any): CartAction => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: { item }
})

export const clearCart = (): CartAction => ({
  type: CartTypes.CLEAR_CART
})
