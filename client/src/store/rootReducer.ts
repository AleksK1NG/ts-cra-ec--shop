import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { shopReducer, ShopState } from './modules/shop/shopReducer'
import { authReducer, AuthState } from './modules/auth/authReducer'
import { uiReducer, UIState } from './modules/UI/uiReducer'
import history from '../history'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop']
}

const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  UI: uiReducer,
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>

// The top-level state object
export interface ApplicationState {
  shop: ShopState
  auth: AuthState
  UI: UIState
}

export default persistReducer(persistConfig, rootReducer)
