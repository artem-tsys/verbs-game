import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from 'react-router-dom';
import {Round} from '../../components/round/round';
import styles from '../../components/round/round.module.scss';

export const Game = () => {
  return <>
    <header className={styles.header}>
      <Link to='/home'>
        <KeyboardBackspaceIcon fontSize="large"/>
      </Link>
    </header>
    <h1 className={styles.title}>
      Study irregular verbs
    </h1>
    <Round />
  </>
};
