import { ICategory } from '../../../models/models'

export enum shopActions {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR = 'GET_POSTS_ERROR'
}
export interface PostActions {
  type: shopActions
  payload?: any
}

export const GET_ALL_CATEGORIES_REQUEST = 'GET_ALL_CATEGORIES_REQUEST'
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS'
export const GET_ALL_CATEGORIES_ERROR = 'GET_ALL_CATEGORIES_ERROR'

interface GetCategoriesRequest {
  type: typeof GET_ALL_CATEGORIES_REQUEST,
  payload?: any
}

interface GetCategoriesSuccess {
  type: typeof GET_ALL_CATEGORIES_SUCCESS
  payload: { categories: ICategory[] }
}
interface GetCategoriesError {
  type: typeof GET_ALL_CATEGORIES_ERROR
  payload: { error: any }
}

export type ShopActions = GetCategoriesRequest | GetCategoriesSuccess | GetCategoriesError
