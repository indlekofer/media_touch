import { handleChange, REDUCER } from '@indlekofer/media';

const GET_TOUCH = '@indlekofer/media_touch/ET_TOUCH';

export const config = (touch = false) => {
  handleChange(GET_TOUCH, touch);
};

export const setup = () => {
  try {
    document.createEvent("TouchEvent");
    config(true);
  } catch(e) {
    config(false);
  }
};

export const unset = () => {

};

setup();

export {
  REDUCER,
  GET_TOUCH
};

export default GET_TOUCH;
