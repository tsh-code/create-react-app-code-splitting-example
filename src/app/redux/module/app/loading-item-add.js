import { AppActionTypes } from './action-types';

export function appLoadingItemAdd(name) {

  return {
    type: AppActionTypes.LOADING_ITEM_ADD,
    payload: {
      name,
    }
  }
}
