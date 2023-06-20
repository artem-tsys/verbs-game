import {
  Button,
} from '@mui/material';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {Language} from '../../components/language/language';
import {Mode} from '../../components/mode/mode';
import {Verbs} from '../../components/verbs/verbs';
import {studyVerbsIdsSelector} from '../../store/game/game.selectors';
import {setLearningIds} from '../../store/game/game.slice';
import styles from './home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const learningIds = useSelector(studyVerbsIdsSelector);
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

  useEffect(() => {
    setSelected(learningIds)
  }, [learningIds])

  return <div className={styles.container} >
    <Header />
    <h2 className={styles.title}>Select verbs for study</h2>
    <div className={styles.verbs} >
      <Verbs
        selected={selected}
        changeSelected={changeSelected}
        changeSelectedGroup={changeSelectedGroup}
      />
    </div>
    <Mode />
    <div className={styles.footer}>
      <Button mt={12} onClick={handleStartGame} variant="contained" disabled={!selected.length}>
        start game
      </Button>
    </div>
  </div>
}
