import {Paper} from '@mui/material';
import cn from 'classnames';
import styles from './info.module.scss';

export const Info = ({
  title,
  value,
  variant
}) => {
  const classesTitle = cn(styles.title, {
      [styles['title--question']]: variant === 'question',
      [styles['title--answer']]: variant === 'answer'
    }
  );
  return <Paper elevation={4} className={styles.card}>
    <span className={classesTitle}>{title }</span>
    <span className={styles.value}>{value}</span>
  </Paper>
}
