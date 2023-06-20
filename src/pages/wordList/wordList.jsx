import {Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Visible} from '../../components/buttons/visible/visible';
import {Header} from '../../components/header/header';
import {languageSelector} from '../../store/common/common.selectors';
import {typesSelector, verbsSelector} from '../../store/verbs/verbs.selectors';
import styles from './worldList.module.scss';

const Word = ({ word, types, language, isShowTranslate }) => {
  return <TableRow>
    {
      types.map(type => {
        const key = type === 'translate' ? language : type;
        const value = type === 'translate' && !isShowTranslate ? '***' : word[key];
        return <TableCell classes={{root: styles.td}} key={type}>{value}</TableCell>
      })
    }
  </TableRow>
}

const TableHeader = ({types, translateVisible, changeTranslateVisible}) => {
  return <TableHead classes={{ root: styles.thead }}>
    <TableRow>
      {
        types.map(type => {
          const isIncludeButton = type === 'translate';
          return <TableCell classes={{ root: styles.th }} key={type}>
            <div className={styles.td}>
              {type}
              {isIncludeButton && <Visible isVisible={translateVisible} changeVisible={changeTranslateVisible} />}
            </div>
          </TableCell>
        })
      }
    </TableRow>
  </TableHead>
}

export const WordList = () => {
  const worlds = useSelector(verbsSelector);
  const types = useSelector(typesSelector);
  const language = useSelector(languageSelector);
  const [isShowTranslate, setShowTranslate] = useState(true);

  return <div className={styles.container}>
    <Header />
    <div className={styles.list}>
      <Table stickyHeader={true}>
        <TableHeader
          types={types}
          translateVisible={isShowTranslate}
          changeTranslateVisible={setShowTranslate}
        />
        <TableBody>
          {
            worlds.map(word => <Word
              key={word.id}
              word={word}
              types={types}
              language={language}
              isShowTranslate={isShowTranslate}
            />)
          }
        </TableBody>
      </Table>
    </div>
  </div>
};
