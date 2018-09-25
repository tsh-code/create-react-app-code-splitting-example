import { AppActionTypes } from './action-types';

export function appLoadingItemRemove(name) {

  return {
    type: AppActionTypes.LOADING_ITEM_REMOVE,
    payload: {
      name,
    }
  }
}
