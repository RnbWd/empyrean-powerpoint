// @flow

import { DISPLAY_SIDEBAR } from '../actions';

export const initialState = {
  displaySidebar: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_SIDEBAR:
      return {
        ...state,
        displaySidebar: !state.displaySidebar,
      };
    default:
      return state;
  }
};

export default reducer;
