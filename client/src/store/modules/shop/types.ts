import { ICategory, IItem } from '../../../models/models'
import { AnyAction } from 'redux'

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

interface GetCategoryItemsRequest extends AnyAction {
  type: typeof GET_CATEGORY_ITEMS_REQUEST
  payload?: { categoryId: string }
}

interface GetCategoryItemsSuccess extends AnyAction {
  type: typeof GET_CATEGORY_ITEMS_SUCCESS
  payload?: { items: IItem[]; categoryId: string }
}
interface GetCategoryItemsError extends AnyAction {
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

// *************************************

export interface ShopAction extends AnyAction {
  payload?: any
}

export enum ShopTypes {
  STRIPE_PAYMENT_REQUEST = 'STRIPE_PAYMENT_REQUEST',
  STRIPE_PAYMENT_SUCCESS = 'STRIPE_PAYMENT_SUCCESS',
  STRIPE_PAYMENT_ERROR = 'STRIPE_PAYMENT_ERROR',
  GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
  GET_CATEGORY_ITEMS_REQUEST = 'GET_CATEGORY_ITEMS_REQUEST',
  GET_CATEGORY_ITEMS_SUCCESS = 'GET_CATEGORY_ITEMS_SUCCESS',
  GET_CATEGORY_ITEMS_ERROR = 'GET_CATEGORY_ITEMS_ERROR',
}
