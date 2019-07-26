import { createSelector } from 'reselect'
import { ShopState } from './shopReducer'
import { AppState } from '../../rootReducer'

// Selectors

export const shopSelector = (state: AppState) => state.shop

export const alexNameSelector = createSelector(
  shopSelector,
  (state: ShopState) => state.name
)

export const collectionsSelector = createSelector(
  shopSelector,
  (shop: ShopState) => shop.collections
)
export const collectionByUrlSelector = (url: string) =>
  createSelector(
    collectionsSelector,
    (collections) => collections.filter((collection) => collection.routeName === url)
  )
