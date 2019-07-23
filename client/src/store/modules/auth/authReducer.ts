import { produce } from 'immer'
import { Reducer } from 'redux'
import {
  LOAD_USER_ERROR,
  LOAD_USER_REQUEST,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST
} from './types'
import { IUser } from '../../../models/models'

export interface AuthState {
  user: IUser | null
  isLoading: boolean
  error: any
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false
}

export const authReducer: Reducer<AuthState, any> = (state = initialState, action): AuthState =>
  produce(state, (draft: AuthState) => {
    const { type, payload } = action

    switch (type) {
      case LOGIN_USER_REQUEST:
      case REGISTER_USER_REQUEST:
      case LOAD_USER_REQUEST:
        draft.isLoading = true
        return

      case LOGIN_USER_SUCCESS:
        draft.user = payload.user
        draft.error = null
        draft.isAuthenticated = true
        draft.isLoading = false
        return

      case LOGIN_USER_ERROR:
      case REGISTER_USER_ERROR:
      case LOAD_USER_ERROR:
        draft.error = payload.error
        draft.isLoading = false
        draft.isAuthenticated = false
        return

      default:
        return state
    }
  })
