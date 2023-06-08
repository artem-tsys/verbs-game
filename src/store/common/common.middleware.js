import {nextRound} from '../game/game.slice';
import {SHOW_MODAL} from './common.slice';

export const commonMiddleware = store => next => async action => {
  const {getState} = store;

  next(action);
  switch (action.type) {
    case SHOW_MODAL.type: {
      const state = getState();
      // eslint-disable-next-line no-console
      console.log(state);
      break;
    }
    case nextRound.type: {
      const state = getState();
      // eslint-disable-next-line no-console
      console.log(state);
      break;
    }
  }
};
