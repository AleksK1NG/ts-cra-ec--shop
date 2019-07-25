import { produce } from 'immer'
import {
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_CATEGORY_ITEMS_ERROR,
  GET_CATEGORY_ITEMS_REQUEST,
  GET_CATEGORY_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  GET_ITEMS_REQUEST,
  ShopActions
} from './types'
import { ICategory, IItem } from '../../../models/models'
// import { ISCollections, SHOP_DATA } from './mockData'
import { SHOP_DATA, ISDataCollection } from './shopData'

export interface ShopState {
  collections: ISDataCollection[]
  name: string
  posts?: any[] | null
  isLoading: boolean
  error: any
  categories: ICategory[]
  items: IItem[] | null
}
interface Action {
  type: string
  payload?: any
}

const initialState: ShopState = {
  collections: SHOP_DATA,
  name: 'Alex',
  posts: null,
  isLoading: false,
  error: null,
  categories: [],
  items: null
}

export const shopReducer = (state = initialState, action: ShopActions): ShopState =>
  produce(state, (draft: ShopState) => {
    const { type, payload } = action

    switch (type) {
      case GET_ALL_CATEGORIES_REQUEST:
      case GET_CATEGORY_ITEMS_REQUEST:
      case GET_ITEMS_REQUEST:
        draft.isLoading = true
        return

      case GET_ALL_CATEGORIES_SUCCESS:
        draft.categories = payload.categories
        draft.error = null
        draft.isLoading = false
        return

      case GET_CATEGORY_ITEMS_SUCCESS:
        if (draft.categories.length !== 0) {
          debugger
          const index = draft.categories.findIndex((cat) => cat._id === payload.categoryId)
          if (index > -1) {
            draft.categories[index].items = payload.items
            debugger
            draft.error = null
            draft.isLoading = false
            return
          }
        }
        draft.categories = []
        draft.isLoading = false
        return

      case GET_ALL_CATEGORIES_ERROR:
      case GET_CATEGORY_ITEMS_ERROR:
      case GET_ITEMS_ERROR:
        draft.error = payload.error
        draft.isLoading = false
        return

      default:
        return state
    }
  })
