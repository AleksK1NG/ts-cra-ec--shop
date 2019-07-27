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

export const collectionUrlSelector = (url: string) =>
  createSelector(
    collectionsSelector,
    (collections) => collections.find((col) => col.routeName === url)
  )

export const categoriesSelector = createSelector(
  shopSelector,
  (shop: ShopState) => shop.categories
)

// For Map version
// export const collectionObjSelector = createSelector(
//   collectionsSelector,
//   (collections) => collections.keys(collections).map((key) => collections[key])
// )
