// @flow

import { DISPLAY_SIDEBAR, UPDATE_SLIDE } from '../actions';

export const initialState = {
  displaySidebar: false,
  slides: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_SIDEBAR:
      return {
        ...state,
        displaySidebar: !state.displaySidebar,
      };
    case UPDATE_SLIDE:
      return {
        ...state,
        slides: {
          ...state.slides,
          [action.num]: action.text,
        },
      };
    default:
      return state;
  }
};

export default reducer;
