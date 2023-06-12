import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {HIDE_MODAL} from '../../../../store/common/common.slice';
import {Substrate} from '../../substrate';
import stylePopup from '../../../../styles/popups.module.scss';
import style from '../answer.module.scss';

export const CorrectAnswer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(HIDE_MODAL())
    }, 1500)
  }, [])

  return <>
    <div className={stylePopup.popup}>
      <div className={stylePopup.popup__content}>
        <div className={style.icon}>
          <CheckCircleOutlineIcon fontSize='inherit' color='success' />
        </div>
      </div>
    </div>
    <Substrate />
  </>
}
