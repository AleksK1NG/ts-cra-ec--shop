import { put, all, takeLatest, call } from 'redux-saga/effects'
import ApiService from '../../../services/apiService'
import axios from 'axios'
import { getCategoriesError, getCategoriesSuccess, getPostsError, getPostsSuccess } from './shopActions'
import { GET_ALL_CATEGORIES_REQUEST, shopActions } from './types'

export function* getPostsSaga(): any {
  try {
    const { data } = yield axios.get('https://jsonplaceholder.typicode.com/posts')
    debugger
    yield put(getPostsSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(getPostsError(error))
  }
}

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

export function* saga() {
  yield all([
    takeLatest(shopActions.GET_POSTS_REQUEST, getPostsSaga),
    takeLatest(GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga)
  ])
}
