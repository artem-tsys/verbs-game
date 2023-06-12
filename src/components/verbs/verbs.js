import {
  Accordion, AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box, Checkbox, FormControlLabel
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cn from 'classnames';
import {groupBy} from 'lodash';
import {useSelector} from 'react-redux';
import {getIdsFromCollections} from '../../utils/getIdsFromCollections';
import {verbsSelector} from '../../store/verbs/verbs.selectors';
import {isCollectionIncludesEveryIds} from '../../utils/isCollectionIncludesEveryIds';
import {VerbGroup} from './verb';
import styles from './verbs.module.scss';

export const Verbs = ({ selected, changeSelected, changeSelectedGroup}) => {
  const verbs = useSelector(verbsSelector);

  const selectAllGroups = () => {
    const ids = getIdsFromCollections(verbs);
    changeSelectedGroup(ids)
  };

  const onSelectAll = (group) => {
    const ids = getIdsFromCollections(group);
    changeSelectedGroup(ids)
  };

  const isIndeterminate = (elements) => {
    const firstElValue = selected.includes(elements[0].id);
    return !elements.every((elem) => firstElValue === selected.includes(elem.id))
  };

  if(!verbs.length) return null;
  const groups = Object.values(groupBy(verbs, 'group'));

  return <Box className={styles.container}>
    <FormControlLabel
      labelPlacement='end'
      label='select all'
      checked={verbs.every((verb) => selected.includes(verb.id))}
      control={<Checkbox onChange={selectAllGroups}/>}
      className={cn(styles.label__group, styles.wrap)}
    />
    <Accordion defaultExpanded>
      <AccordionDetails >
        {
        groups.map((group, i) => <Accordion key={i}>
          <AccordionActions>
            <FormControlLabel
              key={`group ${i}`}
              labelPlacement='end'
              checked={isCollectionIncludesEveryIds(group, selected)}
              control={<Checkbox onChange={() => onSelectAll(group)}  indeterminate={isIndeterminate(group)}/>}
            />
            <AccordionSummary classes={{ root: cn(styles.label__group, styles['label-lvl2__group'])}} expandIcon={<ExpandMoreIcon />}>
              <span className={styles.label}>group {group[0].group}</span>
            </AccordionSummary>
          </AccordionActions>
          <AccordionDetails classes={{ root: styles.container }}>
            <VerbGroup
              group={group}
              selected={selected}
              changeSelected={changeSelected}
              changeSelectedGroup={changeSelectedGroup}
            />
          </AccordionDetails>
        </Accordion>)
        }
      </AccordionDetails>
    </Accordion>
  </Box>
}
