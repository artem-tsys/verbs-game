import {Button, Stack} from '@mui/material';
import cn from 'classnames';
import {Info} from '../../../info/info';
import styles from './speaking-mode.module.scss';

export const SpeakingMode = ({
    countLearnedVerbs,
    countLearningVerbs,
    question,
    answerValue,
    answerType,
    handleIncorrect,
    handleCorrect
 }) => {
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
    <Stack direction="row" className={styles.buttonGroup} >
      <Button
        color='warning'
        variant='contained'
        classes={{ root: cn(styles.btn, styles.btn__offset) }}
        onClick={() => handleIncorrect(answerValue)} >
        repeat verb
      </Button>
      <Button
        color='success'
        variant='contained'
        classes={{ root: cn(styles.btn, styles.btn__offset) }}
        onClick={handleCorrect}
      >correct answer</Button>
    </Stack>
  </div>
}
