import {
  Box,
  Button,
  Grid
} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Verbs} from '../components/verbs/verbs';
import {setLearningIds} from '../store/game/game.slice';

const styles = {
  container: {
    height: '100%',
    width: '100%'
  },
  verbsContainer: {
    display: 'inline-block',
    overflow: 'auto',
    maxHeight: '80vh',
    border: '1px solid #aeaeae'
  }
};

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

  return <Grid container spacing={2} style={styles.container} >
    <Grid item xs={12}>
      <h2>
        Select verbs for study
      </h2>
    </Grid>

    <Grid item xs={3} style={styles.verbsContainer} >
      <Verbs
        selected={selected}
        changeSelected={changeSelected}
        changeSelectedGroup={changeSelectedGroup}
      />
    </Grid>
    <Grid item xs={9}>
      <Box mb={2}>{ !selected.length && 'select verbs' }</Box>
      <Button onClick={handleStartGame} variant="contained" disabled={!selected.length}>
        start game
      </Button>
    </Grid>
  </Grid>
}
