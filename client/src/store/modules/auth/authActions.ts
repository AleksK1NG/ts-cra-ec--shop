import { AuthAction, AuthActionTypes } from './types'
import { IUser } from '../../../models/models'
import { ILoginForm } from '../../../components/SingIn/SignIn'

export const loginRequest = (userData: ILoginForm): AuthAction => ({
  type: AuthActionTypes.LOGIN_USER_REQUEST,
  payload: { userData }
})

export const loginSuccess = (user: IUser): AuthAction => ({
  type: AuthActionTypes.LOGIN_USER_SUCCESS,
  payload: { user }
})

export const loginError = (error: any): AuthAction => ({
  type: AuthActionTypes.LOGIN_USER_ERROR,
  payload: { error }
})

export const registerRequest = (): AuthAction => ({
  type: AuthActionTypes.REGISTER_USER_REQUEST
})

export const registerSuccess = (user: IUser): AuthAction => ({
  type: AuthActionTypes.REGISTER_USER_SUCCESS,
  payload: { user }
})

export const registerError = (error: any): AuthAction => ({
  type: AuthActionTypes.REGISTER_USER_ERROR,
  payload: { error }
})

export const loadUserRequest = (): AuthAction => ({
  type: AuthActionTypes.LOAD_USER_REQUEST
})

export const loadUserSuccess = (user: IUser): AuthAction => ({
  type: AuthActionTypes.LOAD_USER_SUCCESS,
  payload: { user }
})

export const loadUserError = (error: any): AuthAction => ({
  type: AuthActionTypes.LOAD_USER_ERROR,
  payload: { error }
})