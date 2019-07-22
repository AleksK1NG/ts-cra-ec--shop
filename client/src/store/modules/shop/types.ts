import { ICategory, IItem } from '../../../models/models'

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

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR'

export const GET_CATEGORY_ITEMS_REQUEST = 'GET_CATEGORY_ITEMS_REQUEST'
export const GET_CATEGORY_ITEMS_SUCCESS = 'GET_CATEGORY_ITEMS_SUCCESS'
export const GET_CATEGORY_ITEMS_ERROR = 'GET_CATEGORY_ITEMS_ERROR'

interface GetCategoriesRequest {
  type: typeof GET_ALL_CATEGORIES_REQUEST
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

interface GetItemsRequest {
  type: typeof GET_ITEMS_REQUEST
  payload?: any
}

interface GetItemsSuccess {
  type: typeof GET_ITEMS_SUCCESS
  payload: { items: IItem[] }
}
interface GetItemsError {
  type: typeof GET_ITEMS_ERROR
  payload: { error: any }
}

interface GetCategoryItemsRequest {
  type: typeof GET_CATEGORY_ITEMS_REQUEST
  payload?: {categoryId: string }
}

interface GetCategoryItemsSuccess {
  type: typeof GET_CATEGORY_ITEMS_SUCCESS
  payload?: { items: IItem[], categoryId: string }
}
interface GetCategoryItemsError {
  type: typeof GET_CATEGORY_ITEMS_ERROR
  payload?: { error: any }
}

export type ShopActions =
  | GetCategoriesRequest
  | GetCategoriesSuccess
  | GetCategoriesError
  | GetItemsRequest
  | GetItemsSuccess
  | GetItemsError
  | GetCategoryItemsRequest
  | GetCategoryItemsSuccess
  | GetCategoryItemsError
