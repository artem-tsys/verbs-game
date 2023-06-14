import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {HIDE_MODAL} from '../../../store/common/common.slice';
import {resetGame} from '../../../store/game/game.slice';
import stylePopup from '../../../styles/popups.module.scss';
import style from './finishRound.module.scss';
import {Substrate} from '../substrate';
import gifCongratulation from '../../../assets/images/congratulation.gif';

export const FinishRound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRepeat = () => {
    dispatch(resetGame())
    dispatch(HIDE_MODAL())
    navigate('/game');
  };

  const handleFinish = () => {
    dispatch(HIDE_MODAL())
    navigate('/home')
  };

  return <>
    <div className={stylePopup.popup}>
      <div className={stylePopup.popup__content}>
        <div className={style.icon}>
          <img src={gifCongratulation} alt="congtatulation"/>
        </div>
        <div className={style.text}>Congratulation!!</div>
        <div className={style['button-group']}>
          <Button
            variant='outlined'
            classes={{root: style.btn}}
            color='warning'
            onClick={() => handleRepeat()}
          >repeat all</Button>
          <Button
            variant='outlined'
            classes={{root: style.btn}}
            color='success'
            onClick={() => handleFinish()}
          >finish</Button>
        </div>
      </div>
    </div>
    <Substrate />
  </>
}
