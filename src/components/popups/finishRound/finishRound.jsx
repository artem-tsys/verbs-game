import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetGame} from '../../../store/game/game.slice';
import style from '../../../styles/popups.module.scss';
import {Substrate} from '../substrate';

export const FinishRound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRepeat = () => {
    dispatch(resetGame())
  };

  const handleFinish = () => {
    navigate('/')
  }

  return <>
    <div className={style.popup}>
      <div className={style.popup__header}>
        Congratulation!
      </div>
      <div className={style.popup__content}>
        <Button variant='outlined' color='warning' onClick={handleRepeat} >repeat all</Button>
        <Button variant='outlined' color='success' onClick={handleFinish}>finish</Button>
      </div>
    </div>
    <Substrate />
  </>
}
