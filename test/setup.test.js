import assert from 'assert';
import store from '@indlekofer/redux-store';
import { GET_TOUCH, REDUCER, setup, unset } from '../src/index';

function handleChangeTest(done, touch) {
  const state = store.getState()[REDUCER].get(GET_TOUCH)
  assert.equal(touch, state);
  done();
}

describe('setup', () => {
  var unsubscribe;

  beforeEach(() => {
    global.document = {};
  });

  afterEach(() => {
    unsubscribe();
  });
  it('fine', (done) => {
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, false));
    setup();
  });
  it('fine', (done) => {
    global.document = {createEvent: function () {}};
    unsubscribe = store.subscribe(handleChangeTest.bind(null, done, true));
    setup();
  });
});

