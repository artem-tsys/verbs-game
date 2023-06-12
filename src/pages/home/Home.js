import {
  Button,
} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Verbs} from '../../components/verbs/verbs';
import {setLearningIds} from '../../store/game/game.slice';
import styles from './home.module.scss';

// const styles = {
//   container: {
//     height: '100%',
//     width: '100%'
//   },
//   title: {
//     textAlign: 'center'
//   },
//   verbsContainer: {
//     display: 'inline-block',
//     overflow: 'auto',
//     maxHeight: '100%',
//     border: '1px solid #aeaeae'
//   }
// };

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleStartGame = () => {
    dispatch(setLearningIds(selected));
    navigate('/game')
  };

  const changeSelected = (id) => {
    if(selected.includes(id)) {
      setSelected((state) => state.filter(el => el !== id))
    } else {
      setSelected((state) => state.concat(id))
    }
  };

  const changeSelectedGroup = (ids) => {
    if(!Array.isArray(ids)) {
      return;
    }

    const removeIds = (state) => state.filter(id => !ids.includes(id));
    const addIds = (state) => ids.reduce((acc, id) => {
      if(acc.includes(id)) {
        return acc;
      }
      return [...acc, id];
    }, state);

    const hasAllGroup = ids.every(selectId => selected.includes(selectId));

    const handler = hasAllGroup ? removeIds : addIds;
    setSelected(handler);
  };

  return <div className={styles.container} >
    <h2 className={styles.title}>
      Select verbs for study
    </h2>
    <div className={styles.verbs} >
      <Verbs
        selected={selected}
        changeSelected={changeSelected}
        changeSelectedGroup={changeSelectedGroup}
      />
    </div>
    <span className={styles['empty-text']}>{ !selected.length && 'Select the verbs' }</span>
    <div className={styles.footer}>
      <Button mt={12} onClick={handleStartGame} variant="contained" disabled={!selected.length}>
        start game
      </Button>
    </div>
  </div>
}
