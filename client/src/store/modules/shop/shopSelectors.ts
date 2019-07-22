import { createSelector } from 'reselect'
import { ShopState } from './shopReducer'
import { AppState } from '../../rootReducer'

// Selectors

const moduleName = 'shop'

export const stateSelector = (state: any) => state[moduleName]

export const alexNameSelector = createSelector(
  stateSelector,
  (state: ShopState) => state.name
)

export const allPostsSelector = createSelector(
  stateSelector,
  (state: ShopState) => state.posts
)
