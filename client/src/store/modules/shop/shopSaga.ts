import { put, all, takeLatest, call } from 'redux-saga/effects'
import ApiService from '../../../services/apiService'
import {
  getCategoriesError,
  getCategoriesSuccess,
  getCategoryItemsError,
  getCategoryItemsSuccess,
  getItemsError,
  getItemsSuccess,
  stripePaymentError
} from './shopActions'
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_CATEGORY_ITEMS_REQUEST,
  GET_ITEMS_REQUEST,
  ShopAction,
  ShopTypes
} from './types'
import { clearCart } from '../cart/cartActions'

export function* getAllCategoriesSaga(): any {
  try {
    const { data } = yield call(ApiService.getAllCategories)
    debugger
    yield put(getCategoriesSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(getCategoriesError(error))
  }
}

export function* getAllItemsSaga(): any {
  try {
    const { data } = yield call(ApiService.getAllItems)
    debugger
    yield put(getItemsSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(getItemsError(error))
  }
}

export function* getCategoryItemsSaga(action: any): any {
  const { payload } = action
  try {
    const { data } = yield call(ApiService.getCategoryItems, payload.categoryId)
    debugger
    yield put(getCategoryItemsSuccess(data, payload.categoryId))
  } catch (error) {
    console.error(error)
    yield put(getCategoryItemsError(error))
  }
}

export function* stripePaymentSaga({ payload }: ShopAction) {
  try {
    const data = yield call(ApiService.stripePayment, payload.paymentData)

    yield put(clearCart())
    console.log('Stripe payment data response => ', data)
  } catch (error) {
    console.error(error)
    yield put(stripePaymentError(error))
  }
}

export function* saga() {
  yield all([
    takeLatest(GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga),
    takeLatest(GET_ITEMS_REQUEST, getAllItemsSaga),
    takeLatest(GET_CATEGORY_ITEMS_REQUEST, getCategoryItemsSaga),
    takeLatest(ShopTypes.STRIPE_PAYMENT_REQUEST, stripePaymentSaga)
  ])
}
