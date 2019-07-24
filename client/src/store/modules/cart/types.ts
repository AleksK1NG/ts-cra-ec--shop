import { Action } from 'redux'

export enum CartTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  DELETE_CART_ITEM = 'DELETE_CART_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
}

export interface CartAction extends Action {
  payload?: any
}
