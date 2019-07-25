import { createSelector } from 'reselect'
import { ShopState } from './shopReducer'
import { AppState } from '../../rootReducer'

// Selectors


export const stateSelector = (state: AppState) => state.shop

export const alexNameSelector = createSelector(
  stateSelector,
  (state: ShopState) => state.name
)

export const allPostsSelector = createSelector(
  stateSelector,
  (state: ShopState) => state.posts

)
