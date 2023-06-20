import {random} from 'lodash';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {POPUP} from '../../constants/modal.constants';
import {languageSelector} from '../../store/common/common.selectors';
import {SHOW_MODAL} from '../../store/common/common.slice';
import {
  roundSelector,
  studiedVerbsIdsSelector,
  studyVerbsIdsSelector,
  typeModeSelector
} from '../../store/game/game.selectors';
import {addLearned, nextRound} from '../../store/game/game.slice';
import {typesSelector} from '../../store/verbs/verbs.selectors';
import {getUniqTwoRandomElements} from '../../utils/getUniqTwoRandomElements';
import {SpeakingMode} from './components/speaking-mode/speaking-mode';
import {WritingMode} from './components/writing-mode/writing-mode';

const mappingModes = {
  speaking: SpeakingMode,
  writing: WritingMode
};

export const Round = ({verbs}) => {
  const dispatch = useDispatch();

  const typesDefault = useSelector(typesSelector);
  const round = useSelector(roundSelector);
  const learningVerbs = useSelector(studyVerbsIdsSelector);
  const learnedVerbs = useSelector(studiedVerbsIdsSelector);
  const typeMode = useSelector(typeModeSelector);

  const language = useSelector(languageSelector);
  const Component = typeMode && mappingModes[typeMode];

  const [currentVerb, setCurrentVerb] = useState({});
  const [types, setTypes] = useState({ ask: '', answer: '' });

  const handleCorrect = useCallback(() => {
    dispatch(SHOW_MODAL({ name: POPUP.correctAnswer}))
    dispatch(addLearned(currentVerb.id))
    dispatch(nextRound())
  }, [currentVerb]);

  const handleIncorrect = useCallback((answerValue) => {
    dispatch(SHOW_MODAL({ name: POPUP.incorrectAnswer, data: { answer: answerValue }}))
    dispatch(nextRound())
  }, [currentVerb]);

  useEffect(() => {
    const indexLastElem = verbs.length - 1;
    const nextElementIndex = random(0, indexLastElem);
    setCurrentVerb(verbs[nextElementIndex])
  }, [verbs, round])

  useEffect(() => {
    const [askType, answerType] = getUniqTwoRandomElements(typesDefault);

    setTypes({
      ask: askType === 'translate' ? language : askType,
      answer: answerType === 'translate' ? language : answerType
    })
  }, [currentVerb, round])


  if(!Component || !currentVerb) return null;

  return <Component
    countLearnedVerbs={learnedVerbs.length}
    countLearningVerbs={learningVerbs.length}
    question={currentVerb[types.ask]}
    answerValues={currentVerb[types.answer]}
    answerType={types.answer}
    handleCorrect={handleCorrect}
    handleIncorrect={handleIncorrect}
  />
}
