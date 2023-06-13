import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {typeModeSelector} from '../../store/game/game.selectors';
import {setType} from '../../store/game/game.slice';
import style from './mode.module.scss';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';

export const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(typeModeSelector);

  const onSelect = (value) => {
    dispatch(setType(value))
  };

  return <div className={style.container}>
    <button className={cn(style.card, {[style['card--active']]: mode === 'writing'})} onClick={() => onSelect('writing')}>
      <div className={style.icon}>
       <TextFieldsOutlinedIcon fontSize='inherit' color='info' />
      </div>
      <span>writing</span>
    </button>
    <button className={cn(style.card, {[style['card--active']] : mode === 'speaking'})} onClick={() => onSelect('speaking')}>
      <div className={style.icon}>
        <RecordVoiceOverOutlinedIcon fontSize='inherit' color='info' />
      </div>
      <span>speaking</span>
    </button>
  </div>
}
