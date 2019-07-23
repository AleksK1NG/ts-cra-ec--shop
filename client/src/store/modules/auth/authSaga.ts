import { put, all, takeLatest, call } from 'redux-saga/effects'
import ApiService from '../../../services/apiService'
import { loadUserError, loadUserSuccess, loginError, loginSuccess, registerError, registerSuccess } from './authActions'
import { AuthActionTypes } from './types'

export function* loginUserSaga(action: any): any {
  const { payload } = action
  try {
    const { data } = yield call(ApiService.loginUser, payload.userData)
    yield put(loginSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(loginError(error))
  }
}

export function* registerUserSaga(action: any): any {
  const { payload } = action
  try {
    const { data } = yield call(ApiService.registerUser, payload.userData)
    yield put(registerSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(registerError(error))
  }
}

export function* loadUserSaga(action: any): any {
  try {
    const { data } = yield call(ApiService.loadUser)
    yield put(loadUserSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(loadUserError(error))
  }
}

export function* saga() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN_USER_REQUEST, loginUserSaga),
    takeLatest(AuthActionTypes.LOAD_USER_REQUEST, loadUserSaga),
    takeLatest(AuthActionTypes.REGISTER_USER_REQUEST, registerUserSaga)
  ])
}
