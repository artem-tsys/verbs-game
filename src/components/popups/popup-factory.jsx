import React from 'react'
import {useSelector} from 'react-redux';
import {POPUP} from '../../constants/modal.constants';
import {modalNameSelector} from '../../store/common/common.selectors';
import { CorrectAnswer } from './answer/correctAnswer/correctAnswer';
import { IncorrectAnswer } from './answer/incorrectAnswer/incorrectAnswer';
import {FinishRound} from './finishRound/finishRound';
import style from '../../styles/popups.module.scss';

const popupsConfig = {
  [POPUP.correctAnswer]: CorrectAnswer,
  [POPUP.incorrectAnswer]: IncorrectAnswer,
  [POPUP.finishRound]: FinishRound
}

export const ModalManager = () => {
  const modalName = useSelector(modalNameSelector);

  const ModalToShow = popupsConfig[modalName];
  const hasModalToShow = modalName && ModalToShow;

  return hasModalToShow && <div className={style.backdrop}>
     <ModalToShow />
  </div>
}
