import { Action } from 'redux'

// export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
// export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
//
// export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
// export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'
//
// export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
// export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
// export const LOAD_USER_ERROR = 'LOAD_USER_ERROR'

export enum AuthActionTypes {
  LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_ERROR = 'REGISTER_USER_ERROR',
  LOAD_USER_REQUEST = 'LOAD_USER_REQUEST',
  LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
  LOAD_USER_ERROR = 'LOAD_USER_ERROR'
}

export interface AuthAction extends Action {
  payload?: any
}
