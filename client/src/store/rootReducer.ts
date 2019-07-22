import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { shopReducer } from './modules/shop/shopReducer'
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
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>

export default persistReducer(persistConfig, rootReducer)
