export const DISPLAY_SIDEBAR = 'DISPLAY_SIDEBAR';
export const UPDATE_SLIDE = 'UPDATE_SLIDE';

// action toggles menu sidebar
export const displaySidebar = () => ({
  type: DISPLAY_SIDEBAR,
});

// updates slide by number
export const updateSlide = ({ num, text }) => ({
  type: UPDATE_SLIDE,
  num,
  text,
});
