import {Button, ButtonGroup} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './header.module.scss';
import {Language} from '../language/language';

export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  return <header className={styles.header}>
    <ButtonGroup>
      <Button
        variant='contained'
        disabled={pathname === '/home'}
        onClick={() => navigate('/home')}
      >
        Game
      </Button>
      <Button
        variant='contained'
        disabled={pathname === '/wordList'}
        onClick={() => navigate('/wordList')}
      >
        World List
      </Button>
    </ButtonGroup>
    <Language/>
  </header>
}
