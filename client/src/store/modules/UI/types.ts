import { Action } from 'redux'

export enum UITypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
}

export interface UIAction extends Action {
  payload?: any
}
