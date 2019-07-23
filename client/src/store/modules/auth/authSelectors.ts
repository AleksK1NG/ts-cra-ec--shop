import { createSelector } from 'reselect'
import { AuthState } from './authReducer'
import { AppState } from '../../rootReducer'

// Selectors

const moduleName = 'auth'

export const stateSelector = (state: AppState) => state[moduleName]

export const userSelector = createSelector(stateSelector, (state: AuthState) => state.user)