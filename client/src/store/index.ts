import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import history from '../history'

import { persistStore } from 'redux-persist'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
