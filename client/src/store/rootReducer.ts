import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { shopReducer, ShopState } from './modules/shop/shopReducer'
import { authReducer, AuthState } from './modules/auth/authReducer'
import { uiReducer, UIState } from './modules/UI/uiReducer'
import { cartReducer, CartState } from './modules/cart/cartReducer'
import { directoryReducer, DirectoryState } from './modules/directory/directoryReducer'
import history from '../history'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  UI: uiReducer,
  cart: cartReducer,
  directory: directoryReducer,
  router: connectRouter(history)
})

// export type AppState = ReturnType<typeof rootReducer>

// The top-level state object
export interface AppState {
  shop: ShopState
  auth: AuthState
  UI: UIState
  cart: CartState
  directory: DirectoryState
}

export default persistReducer(persistConfig, rootReducer)
