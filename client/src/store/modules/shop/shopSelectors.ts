import { createSelector } from 'reselect'
import { IShop } from './shopReducer'

// Selectors

const moduleName = 'shop'

export const stateSelector = (state: any) => state[moduleName]

export const alexNameSelector = createSelector(
  stateSelector,
  (state: IShop) => state.name
)

export const allPostsSelector = createSelector(
  stateSelector,
  (state: IShop) => state.posts
)
