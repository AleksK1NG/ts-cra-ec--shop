export enum shopActions {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR = 'GET_POSTS_ERROR'
}

export interface PostActions {
  type: shopActions;
  payload?: any;
}
