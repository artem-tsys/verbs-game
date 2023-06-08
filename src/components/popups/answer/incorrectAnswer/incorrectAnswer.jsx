import {Box, Button, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {modalDataSelector} from '../../../../store/common/common.selectors';
import {HIDE_MODAL} from '../../../../store/common/common.slice';
import style from '../../../../styles/popups.module.scss';
import {Substrate} from '../../substrate';

export const IncorrectAnswer = () => {
  const dispatch = useDispatch();
  const data = useSelector(modalDataSelector);

  const onClick = () => {
    dispatch(HIDE_MODAL())
  };

  return <>
    <div className={style.popup}>
      <div className={style.popup__content}>
        <Box sx={{ flexDirection: 'column' }} >
          <Typography variant="h6" component="h6">
            Right answer:
          </Typography>
          <Typography variant="h4" component="span" mt={2} color='darkgreen' fontWeight='600' textTransform='capitalize'>
            { data?.answer }
          </Typography>
        </Box>
        <Box mt={2}>
          <Button variant='outlined' color='success'  onClick={onClick}>understand</Button>
        </Box>
      </div>
    </div>
    <Substrate />
  </>
}

