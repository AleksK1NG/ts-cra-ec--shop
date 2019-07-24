import { produce } from 'immer'
import { UIAction, UITypes } from './types'

export interface UIState {
  showCartIcon: boolean
}

const initialState: UIState = {
  showCartIcon: true
}

export const uiReducer = (state = initialState, action: UIAction) =>
  produce(state, (draft: UIState) => {
    const { type } = action

    switch (type) {
      case UITypes.TOGGLE_CART_HIDDEN:
        draft.showCartIcon = !draft.showCartIcon
        break

      default:
        return
    }
  })

