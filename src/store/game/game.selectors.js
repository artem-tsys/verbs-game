import {verbsSelector} from '../verbs/verbs.selectors';

export const roundSelector = (state) => state.game.round;
export const studiedVerbsIdsSelector = (state) => {
  return state.game.learnedIds;
};
export const studyVerbsIdsSelector = (state) => {
  return state.game.learningIds;
};

export const studyVerbsRemainListSelector = (state) => {
  const studyVerbs = studyVerbsSelector(state);
  const studiedVerbsList = studiedVerbsIdsSelector(state);
  const learningVerbsFullList = studyVerbs.filter(verb => !studiedVerbsList.includes(verb.id));

  return learningVerbsFullList;
};

export const studyVerbsSelector = (state) => {
  const verbs = verbsSelector(state);
  const studyVerbsIds = studyVerbsIdsSelector(state);

  return studyVerbsIds.map((id) =>
    verbs.find(({ id: idVerb}) => idVerb === id)
  );
};

export const countLearningVerbsSelector = (state) => state.game.learningIds.length;
export const countLearnedVerbsSelector = (state) => state.game.learnedIds.length;
export const typeModeSelector = state => state.game.type;
