import { createSelector } from 'reselect'
import { AppState } from '../../rootReducer'
import { UIState } from './uiReducer'

// Selectors

export const uiStateSelector = (state: AppState) => state.UI

export const showCartIconSelector = createSelector(
  uiStateSelector,
  (state: UIState) => state.showCartIcon
)
