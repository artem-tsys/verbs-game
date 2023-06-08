import {Button, Stack} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {random} from 'lodash';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {
  countLearnedVerbsSelector,
  countLearningVerbsSelector, learningSelector, roundSelector, studyVerbsRemainListSelector
} from '../../store/game/game.selectors';
import {typesSelector} from '../../store/verbs/verbs.selectors';
import {getUniqTwoRandomElements} from '../../utils/getUniqTwoRandomElements';
import {Info} from '../info/info';
import styles from './round.module.scss';

export const Round = ({handleCorrect, handleIncorrect}) => {
  const navigate = useNavigate();
  const verbs = useSelector(studyVerbsRemainListSelector);
  const typesDefault = useSelector(typesSelector);
  const round = useSelector(roundSelector);
  const countLearningVerbs = useSelector(countLearningVerbsSelector);
  const countLearnedVerbs = useSelector(countLearnedVerbsSelector);
  const [currentVerb, setCurrentVerb] = useState({});
  const [types, setTypes] = useState({ ask: '', answer: '' });

  useEffect(() => {
    const indexLastElem = verbs.length - 1;
    const nextElementIndex = random(0, indexLastElem);
    setCurrentVerb(verbs[nextElementIndex])

    const [askType, answerType] = getUniqTwoRandomElements(typesDefault);
    if(askType && answerType) {
      setTypes({ ask: askType, answer: answerType })
    }
  }, [round])

  useEffect(() => {
    if(!verbs.length) {
      navigate('/')
    }
  }, [verbs])

  if(!types.ask || !types.answer) return null;

  return <div className={styles.container}>
    <header className={styles.header}>
      <Link to='/home'>
        <KeyboardBackspaceIcon fontSize="large"/>
      </Link>
    </header>
    <h1 className={styles.title}>
      Study irregular verbs
    </h1>
    <div>verbs learned: {countLearnedVerbs}/{countLearningVerbs}</div>
    <div className={styles.group}>
      <div className={styles.verb}>
        <Info title='Study the verb: ' value={currentVerb[types.ask]} variant='question'/>
      </div>
      <div className={styles.verb}>
        <Info title='Reply in the form of: ' value={types.answer} variant='answer' />
      </div>
    </div>
    <Stack spacing={2} direction="row" className={styles.buttonGroup} >
        <Button
          color='warning'
          variant='contained'
          className={styles.btn}
          onClick={() => handleIncorrect(currentVerb[types.answer])} >
          repeat verb
        </Button>
        <Button
          color='success'
          variant='contained'
          className={styles.btn}
          onClick={() => handleCorrect(currentVerb.id)}
        >correct answer</Button>
    </Stack>
  </div>
}
