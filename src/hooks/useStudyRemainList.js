import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {studiedVerbsIdsSelector} from '../store/game/game.selectors';
import {useStudyVerbs} from './useStudyVerbs';

export const useStudyVerbsRemainList = () => {
    const studyVerbs = useStudyVerbs();
    const studiedVerbsList = useSelector(studiedVerbsIdsSelector);
    return useMemo(() => studyVerbs.filter(verb => !studiedVerbsList.includes(verb.id)),
      [studyVerbs, studiedVerbsList])
}
