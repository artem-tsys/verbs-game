import {Button, Stack, TextField} from '@mui/material';
import cn from 'classnames';
import {intersection} from 'lodash';
import {useEffect, useRef} from 'react';
import {Info} from '../../../info/info';
import styles from './writing-mode.module.scss';

const checkAnswer = (correct, value) => {
  const correctAnswers = correct.split('/').map(value => value.trim().toLowerCase());
  const values = value.split('/').map(value => value.trim().toLowerCase());

  const result = intersection(correctAnswers, values);
  return ++result.length;
};

export const WritingMode = ({
  countLearnedVerbs,
  countLearningVerbs,
  question,
  answerValues,
  answerType,
  handleIncorrect,
  handleCorrect
                            }) => {
  const refAnswer = useRef();

  const onPressEnter = (e) => {
    if(e.keyCode == 13) {
      handlerCheckResult()
    }
  };

  const handlerCheckResult = () => {
    const value = refAnswer.current.value;

    if(checkAnswer(answerValues, value)) {
      handleCorrect()
    } else {
      handleIncorrect(answerValues)
    }
  };

  useEffect(() => {
    refAnswer.current.focus()
  }, [question])

  useEffect(() => {
    refAnswer.current.value = '';
  }, [question])

  return <div className={styles.container}>
    <div className={styles.progress}>verbs learned: {countLearnedVerbs}/{countLearningVerbs}</div>
    <div className={styles.group}>
      <div className={styles.verb}>
        <Info title='Study the verb: ' value={question} variant='question'/>
      </div>
      <div className={styles.verb}>
        <Info title='Reply in the form of: ' value={answerType} variant='answer' />
      </div>
    </div>
    <Stack spacing={2} direction="column" className={styles.buttonGroup} >
      <TextField
        id="outlined-basic"
        label="your answer"
        variant="outlined"
        inputRef={refAnswer}
        autoComplete='off'
        autoFocus={true}
        onKeyDown={onPressEnter}
        classes={{ root: cn(styles.btn, styles.btn__offset) }}
      />
      <Button
        color='info'
        variant='contained'
        classes={{ root: cn(styles.btn, styles.btn__offset)}}
        onClick={handlerCheckResult}
      >check</Button>
    </Stack>
  </div>
}
