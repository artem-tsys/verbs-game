import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import styles from './verbs.module.scss';

export const VerbGroup = ({group, selected, changeSelected}) => {
  const onChange = (e) => {
    e.stopPropagation();
    changeSelected(e.target.value)
  };

  return <FormGroup className={styles.list}>
    {
      group.map((world) => <FormControlLabel
        key={world.id}
        labelPlacement='end'
        label={world.v1}
        checked={selected.includes(world.id)}
        control={<Checkbox value={world.id} onChange={onChange}/>}
      />)
    }
  </FormGroup>
}
