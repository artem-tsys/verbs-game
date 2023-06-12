import {Typography} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {modalDataSelector} from '../../../../store/common/common.selectors';
import {HIDE_MODAL} from '../../../../store/common/common.slice';
import stylePopup from '../../../../styles/popups.module.scss';
import style from '../answer.module.scss';
import {Substrate} from '../../substrate';

export const IncorrectAnswer = () => {
  const dispatch = useDispatch();
  const data = useSelector(modalDataSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(HIDE_MODAL())
    }, 2500)
  }, [])

  return <>
    <div className={stylePopup.popup}>
      <div className={stylePopup.popup__content}>
        <div className={style.icon}>
          <CancelIcon color='error' fontSize='inherit' />
        </div>
        <h6 className={style.title}>
          Right answer:
        </h6>
        <p className={style.answer} >
          { data?.answer }
        </p>
      </div>
    </div>
    <Substrate />
  </>
}

