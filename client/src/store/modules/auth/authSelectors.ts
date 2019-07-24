import { createSelector } from 'reselect'
import { AuthState } from './authReducer'
import { AppState } from '../../rootReducer'

// Selectors

export const authStateSelector = (state: AppState) => state.auth

export const userSelector = createSelector(
  authStateSelector,
  (state: AuthState) => state.user
)
