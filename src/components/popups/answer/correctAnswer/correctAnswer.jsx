import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {HIDE_MODAL} from '../../../../store/common/common.slice';
import {Substrate} from '../../substrate';
import style from '../../../../styles/popups.module.scss';

export const CorrectAnswer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(HIDE_MODAL())
    }, 1500)
  }, [])

  return <>
    <div className={style.popup}>
      <div className={style.popup__content}>
        super!
      </div>
    </div>
    <Substrate />
  </>
}
