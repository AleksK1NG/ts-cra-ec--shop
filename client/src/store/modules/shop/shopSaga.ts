import { put, all, takeLatest, call, takeEvery } from 'redux-saga/effects'
import ApiService from '../../../services/apiService'
import {
  getCategoriesError,
  getCategoriesSuccess,
  getCategoryItemsError,
  getCategoryItemsRequest,
  getCategoryItemsSuccess,
  getItemsError,
  getItemsSuccess,
  stripePaymentError
} from './shopActions'
import { ShopAction, ShopTypes } from './types'
import { clearCart } from '../cart/cartActions'

export function* getAllCategoriesSaga(): any {
  try {
    const { data } = yield call(ApiService.getAllCategories)
    yield put(getCategoriesSuccess(data))

    yield all(data.map((d: any) => put(getCategoryItemsRequest(d._id))))
    debugger
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

export function* getCategoryItemsSaga({ payload }: any): any {
  const { categoryId } = payload

  try {
    const { data } = yield call(ApiService.getCategoryItems, categoryId)
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
    takeLatest(ShopTypes.GET_CATEGORIES_REQUEST, getAllCategoriesSaga),
    takeEvery(ShopTypes.GET_CATEGORY_ITEMS_REQUEST, getCategoryItemsSaga),
    takeLatest(ShopTypes.STRIPE_PAYMENT_REQUEST, stripePaymentSaga)
  ])
}
