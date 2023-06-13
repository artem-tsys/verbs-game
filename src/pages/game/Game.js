import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Round} from '../../components/round/round';
import styles from '../../components/round/round.module.scss';
import {resetGame} from '../../store/game/game.slice';

export const Game = () => {
  const dispatch = useDispatch();
  const onClickBack = () => {
    dispatch(resetGame())
  };

  return <>
    <header className={styles.header}>
      <Link to='/home' onClick={onClickBack}>
        <KeyboardBackspaceIcon fontSize="large"/>
      </Link>
    </header>
    <h1 className={styles.title}>
      Study irregular verbs
    </h1>
    <Round />
  </>
};
