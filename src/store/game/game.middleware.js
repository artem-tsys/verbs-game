import {POPUP} from '../../constants/modal.constants';
import {SHOW_MODAL} from '../common/common.slice';
import {
  studiedVerbsIdsSelector,
  studyVerbsIdsSelector
} from './game.selectors';
import {nextRound} from './game.slice';

export const roundMiddleware = (store) => (next) => async (action) => {
  const { dispatch, getState } = store;

  next(action);

  switch (action.type) {
    case nextRound.type: {
      const state = getState();
      const countLearnedVerbs = studiedVerbsIdsSelector(state).length;
      const countLearningVerbs = studyVerbsIdsSelector(state).length;

      if(countLearnedVerbs === countLearningVerbs) {
        dispatch(SHOW_MODAL({ name: POPUP.finishRound }))
      }
    }
  }
}
