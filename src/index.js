import { handleChange, REDUCER } from '@indlekofer/media';

export const GET_TOUCH = '@indlekofer/media_touch/GET_TOUCH';

export const init = () => {
  try {
    document.createEvent('TouchEvent');
    config(true);
  } catch(e) {
    config(false);
  }
};

export const config = (touch) => {
  handleChange(GET_TOUCH, touch);
};

export const setup = () => {
  init();
};

export const unset = () => {
};

setup();

export {
  REDUCER
};

export default GET_TOUCH;
