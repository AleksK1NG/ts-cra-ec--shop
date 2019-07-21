import { PostActions, shopActions } from './types';

export const getPostsRequest = (): PostActions => ({
  type: shopActions.GET_POSTS_REQUEST
});

export const getPostsSuccess = (posts: any[]): PostActions => ({
  type: shopActions.GET_POSTS_SUCCESS,
  payload: { posts }
});

export const getPostsError = (error: any): PostActions => ({
  type: shopActions.GET_POSTS_ERROR,
  payload: { error }
});
