import { shopActions } from './types';
import { produce } from 'immer';

export interface IShop {
  name: string;
  posts?: any[] | null;
  isLoading: boolean;
  error: any;
}
interface Action {
  type: string;
  payload?: any;
}

const initialState: IShop = {
  name: 'Alex',
  posts: null,
  isLoading: false,
  error: null
};

export const shopReducer = (state = initialState, action: Action): IShop =>
  produce(state, (draft: IShop) => {
    const { type, payload } = action;

    switch (type) {
      case shopActions.GET_POSTS_REQUEST:
        draft.isLoading = true;
        draft.name = 'Alex Bryksin';
        return ;

      case shopActions.GET_POSTS_SUCCESS:
        draft.posts = payload.posts;
        draft.isLoading = false;
        draft.error = null;
        return ;

      case shopActions.GET_POSTS_ERROR:
        draft.error = payload.error;
        draft.isLoading = false;
        return ;

      default:
        return state;
    }
  });
