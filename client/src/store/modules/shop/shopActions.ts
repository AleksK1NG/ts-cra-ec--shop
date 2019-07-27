import {
  GET_CATEGORY_ITEMS_ERROR,
  GET_CATEGORY_ITEMS_REQUEST,
  GET_CATEGORY_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ShopAction,
  ShopActions,
  ShopTypes
} from './types'
import { ICategory, IItem, IPaymentData } from '../../../models/models'

export const getCategoriesRequest = (): ShopAction => ({
  type: ShopTypes.GET_CATEGORIES_REQUEST
})

export const getCategoriesSuccess = (categories: any[]): ShopAction => ({
  type: ShopTypes.GET_CATEGORIES_SUCCESS,
  payload: { categories }
})

export const getCategoriesError = (error: any): ShopAction => ({
  type: ShopTypes.GET_CATEGORIES_ERROR,
  payload: { error }
})

export const getItemsRequest = (): ShopActions => ({
  type: GET_ITEMS_REQUEST
})

export const getItemsSuccess = (items: IItem[]): ShopActions => ({
  type: GET_ITEMS_SUCCESS,
  payload: { items }
})

export const getItemsError = (error: any): ShopActions => ({
  type: GET_ITEMS_ERROR,
  payload: { error }
})

export const getCategoryItemsRequest = (categoryId: string): ShopAction => ({
  type: ShopTypes.GET_CATEGORY_ITEMS_REQUEST,
  payload: { categoryId }
})

export const getCategoryItemsSuccess = (items: any[], categoryId: string): ShopAction => ({
  type: ShopTypes.GET_CATEGORY_ITEMS_SUCCESS,
  payload: { items, categoryId }
})

export const getCategoryItemsError = (error: any): ShopAction => ({
  type: ShopTypes.GET_CATEGORY_ITEMS_ERROR,
  payload: { error }
})

export const stripePaymentRequest = (paymentData: IPaymentData): ShopAction => ({
  type: ShopTypes.STRIPE_PAYMENT_REQUEST,
  payload: { paymentData }
})

export const stripePaymentSuccess = (paymentData: any): ShopAction => ({
  type: ShopTypes.STRIPE_PAYMENT_SUCCESS,
  payload: { paymentData }
})

export const stripePaymentError = (error: any): ShopAction => ({
  type: ShopTypes.STRIPE_PAYMENT_ERROR,
  payload: { error }
})
