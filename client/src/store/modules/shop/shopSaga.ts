import { put, all, takeLatest } from 'redux-saga/effects';
// import ApiService from '../../../services/apiService';
import axios from 'axios';
import { getPostsError, getPostsSuccess } from './shopActions';
import { shopActions } from './types';

export function* getPostsSaga(): any {
  try {
    const { data } = yield axios.get('https://jsonplaceholder.typicode.com/posts');
    debugger;
    yield put(getPostsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(getPostsError(error));
  }
}

export function* saga() {
  yield all([takeLatest(shopActions.GET_POSTS_REQUEST, getPostsSaga)]);
}
