import { delay, put, all, call } from 'redux-saga/effects'
import { saga as shopSaga } from './modules/shop/shopSaga'
import { saga as authSaga } from './modules/auth/authSaga'

function* heartBeat() {
  while (true) {
    yield delay(5000)
    yield put({ type: 'KEEP_ALIVE' })
  }
}

export default function* rootSaga() {
  yield all([heartBeat(), call(shopSaga), call(authSaga)])
}
