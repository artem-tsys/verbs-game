import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Round} from '../components/round/round';
import {POPUP} from '../constants/modal.constants';
import {SHOW_MODAL} from '../store/common/common.slice';
import {addLearned, nextRound} from '../store/game/game.slice';

export const Game = () => {
  const dispatch = useDispatch();

  const handleCorrect = useCallback((id) => {
    if(!id) {
      throw new Error('unknown id element: ' + id)
    }

    dispatch(SHOW_MODAL({ name: POPUP.correctAnswer}))
    dispatch(addLearned(id))
    dispatch(nextRound())
  }, []);
  const handleIncorrect = useCallback((correctAnswer) => {
    dispatch(SHOW_MODAL({ name: POPUP.incorrectAnswer, data: { answer: correctAnswer }}))
    dispatch(nextRound())
  }, []);

  return <>
    <Round handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} />
  </>
};
