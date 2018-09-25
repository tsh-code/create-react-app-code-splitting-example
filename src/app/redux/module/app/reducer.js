import { AppActionTypes } from './action-types';
import { appGetInitialState } from './get-initial-state';

export function appReducer(
  state = appGetInitialState(),
  action,
) {

  switch (action.type) {

    case AppActionTypes.LOADING_ITEM_ADD:
      return {
        ...state,
        loadingItems: [
          ...state.loadingItems,
          action.payload.name,
        ],
      };

    case AppActionTypes.LOADING_ITEM_REMOVE:
      return {
        ...state,
        loadingItems: state.loadingItems.filter((item) => item !== action.payload.name),
      };

    default:
      return state;
  }
}
