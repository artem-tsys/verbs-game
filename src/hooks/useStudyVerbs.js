import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {studyVerbsIdsSelector} from '../store/game/game.selectors';
import {verbsSelector} from '../store/verbs/verbs.selectors';

export const useStudyVerbs = () => {
  const verbs = useSelector(verbsSelector);
  const studyVerbsIds = useSelector(studyVerbsIdsSelector);

  return useMemo(() => studyVerbsIds.map((id) =>
    verbs.find(({ id: idVerb}) => idVerb === id)
  ), [verbs, studyVerbsIds])
}
