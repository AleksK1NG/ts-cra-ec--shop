import {
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  PostActions,
  ShopActions,
  shopActions
} from './types'
import { ICategory } from '../../../models/models'

export const getPostsRequest = (): PostActions => ({
  type: shopActions.GET_POSTS_REQUEST
})

export const getPostsSuccess = (posts: any[]): PostActions => ({
  type: shopActions.GET_POSTS_SUCCESS,
  payload: { posts }
})

export const getPostsError = (error: any): PostActions => ({
  type: shopActions.GET_POSTS_ERROR,
  payload: { error }
})

export const getCategoriesRequest = (): ShopActions => ({
  type: GET_ALL_CATEGORIES_REQUEST
})

export const getCategoriesSuccess = (categories: ICategory[]): ShopActions => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: { categories }
})

export const getCategoriesError = (error: any): ShopActions => ({
  type: GET_ALL_CATEGORIES_ERROR,
  payload: { error }
})
