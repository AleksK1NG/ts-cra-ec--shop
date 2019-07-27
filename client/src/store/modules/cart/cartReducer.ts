import { produce } from 'immer'
import { CartAction, CartTypes } from './types'

export interface CartState {
  cartItems: any[]
}

export const initialState: CartState = {
  cartItems: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState =>
  produce(state, (draft: CartState) => {
    const { type, payload } = action
    let index

    switch (type) {
      case CartTypes.ADD_CART_ITEM:
        // find index of item in array
        index = draft.cartItems.findIndex((cartItem) => cartItem._id === payload.item._id)

        // if item exists in array, quantity++
        if (index >= 0) {
          draft.cartItems[index].quantity++
          return
        }
        // is not exists, push item to array
        draft.cartItems.push({ ...payload.item, quantity: 1 })
        return

      case CartTypes.DELETE_CART_ITEM:
        index = draft.cartItems.findIndex((cartItem) => cartItem._id === payload.item._id)

        if (index >= 0 && draft.cartItems[index].quantity > 1) {
          draft.cartItems[index].quantity--
          return
        }
        draft.cartItems.splice(index, 1)
        return

      case CartTypes.CLEAR_ITEM_FROM_CART:
        index = draft.cartItems.findIndex((cartItem) => cartItem._id === payload.item._id)

        draft.cartItems.splice(index, 1)
        return

      case CartTypes.CLEAR_CART:
        draft.cartItems = []
        return

      default:
        return
    }
  })
