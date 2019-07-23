import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { shopReducer, ShopState } from './modules/shop/shopReducer'
import history from '../history'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AuthState } from './modules/auth/authReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop']
}

const rootReducer = combineReducers({
  shop: shopReducer,
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>

// The top-level state object
export interface ApplicationState {
  shop: ShopState
  auth: AuthState
}

export default persistReducer(persistConfig, rootReducer)
