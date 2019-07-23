import { produce } from 'immer'
import { Reducer } from 'redux'
import { AuthAction, AuthActionTypes } from './types'
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

export const authReducer: Reducer<AuthState, any> = (state = initialState, action: AuthAction): AuthState =>
  produce(state, (draft: AuthState) => {
    const { type, payload } = action

    switch (type) {
      case AuthActionTypes.LOGIN_USER_REQUEST:
      case AuthActionTypes.REGISTER_USER_REQUEST:
      case AuthActionTypes.LOAD_USER_REQUEST:
        draft.isLoading = true
        return

      case AuthActionTypes.LOGIN_USER_SUCCESS:
      case AuthActionTypes.LOAD_USER_SUCCESS:
      case AuthActionTypes.REGISTER_USER_SUCCESS:
        draft.user = payload.user
        draft.error = null
        draft.isAuthenticated = true
        draft.isLoading = false
        return

      case AuthActionTypes.LOGIN_USER_ERROR:
      case AuthActionTypes.REGISTER_USER_ERROR:
      case AuthActionTypes.LOAD_USER_ERROR:
        draft.error = payload.error
        draft.isLoading = false
        draft.isAuthenticated = false
        return

      default:
        return state
    }
  })
