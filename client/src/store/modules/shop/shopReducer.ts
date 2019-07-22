import { GET_ALL_CATEGORIES_ERROR, GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESS, ShopActions } from './types'
import { produce } from 'immer'
import { ICategory, IItem } from '../../../models/models'

export interface ShopState {
  name: string
  posts?: any[] | null
  isLoading: boolean
  error: any
  categories: ICategory[] | null
  items: IItem[] | null
}
interface Action {
  type: string
  payload?: any
}

const initialState: ShopState = {
  name: 'Alex',
  posts: null,
  isLoading: false,
  error: null,
  categories: null,
  items: null
}

export const shopReducer = (state = initialState, action: ShopActions): ShopState =>
  produce(state, (draft: ShopState) => {
    const { type, payload } = action

    switch (type) {
      case GET_ALL_CATEGORIES_REQUEST:
        draft.isLoading = true
        return

      case GET_ALL_CATEGORIES_SUCCESS:
        draft.categories = payload.categories
        draft.error = null
        draft.isLoading = false
        return

      case GET_ALL_CATEGORIES_ERROR:
        draft.error = payload.error
        draft.isLoading = false
        return

      default:
        return state
    }
  })

//
//
// export const shopReducer = (state = initialState, action: Action): IShop =>
//   produce(state, (draft: IShop) => {
//     const { type, payload } = action;
//
//     switch (type) {
//       case shopActions.GET_POSTS_REQUEST:
//         draft.isLoading = true;
//         draft.name = 'Alex Bryksin';
//         return ;
//
//       case shopActions.GET_POSTS_SUCCESS:
//         draft.posts = payload.posts;
//         draft.isLoading = false;
//         draft.error = null;
//         return ;
//
//       case shopActions.GET_POSTS_ERROR:
//         draft.error = payload.error;
//         draft.isLoading = false;
//         return ;
//
//       default:
//         return state;
//     }
//   });
