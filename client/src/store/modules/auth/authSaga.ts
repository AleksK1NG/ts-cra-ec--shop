import { put, all, takeLatest, call } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import ApiService from '../../../services/apiService'
import {
  loadUserError,
  loadUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess
} from './authActions'
import { AuthAction, AuthActionTypes } from './types'

export function* loginUserSaga({ payload }: AuthAction) {
  const { userData } = payload

  try {
    const { data } = yield call(ApiService.loginUser, userData)
    yield put(loginSuccess(data))
    localStorage.setItem('auth-token', data.token)
    yield put(replace('/'))
  } catch (error) {
    console.error(error)
    yield put(loginError(error))
  }
}

export function* registerUserSaga({ payload }: AuthAction) {
  const { userData } = payload

  try {
    const { data } = yield call(ApiService.registerUser, userData)
    yield put(registerSuccess(data))
    localStorage.setItem('auth-token', data.token)
    yield put(replace('/'))
  } catch (error) {
    console.error(error)
    yield put(registerError(error))
  }
}

export function* loadUserSaga() {
  try {
    const { data } = yield call(ApiService.loadUser)
    yield put(loadUserSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(loadUserError(error))
  }
}

export function* logoutSaga() {
  try {
    yield put(logoutSuccess())
    localStorage.removeItem('auth-token')
    yield put(replace('/signin'))
  } catch (error) {
    console.error(error)
    yield put(logoutError(error))
  }
}

export function* saga() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN_USER_REQUEST, loginUserSaga),
    takeLatest(AuthActionTypes.LOAD_USER_REQUEST, loadUserSaga),
    takeLatest(AuthActionTypes.REGISTER_USER_REQUEST, registerUserSaga),
    takeLatest(AuthActionTypes.LOGOUT_USER_REQUEST, logoutSaga)
  ])
}
