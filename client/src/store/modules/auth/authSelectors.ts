import { createSelector } from 'reselect'
import { AuthState } from './authReducer'
import { AppState } from '../../rootReducer'

// Selectors

const moduleName = 'auth'

export const authStateSelector = (state: AppState) => state.auth



export const userSelector = createSelector(authStateSelector, (state) => state.user)