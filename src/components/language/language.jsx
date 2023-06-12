import {FormControl, MenuItem, Select} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {languageSelector} from '../../store/common/common.selectors';
import {CHANGE_LANG} from '../../store/common/common.slice';

export const Language = () => {
  const dispatch = useDispatch();
  const language = useSelector(languageSelector);

  const handleChange = (e) => {
    dispatch(CHANGE_LANG(e.target.value))
  };

  return <FormControl  variant='standard'>
    <Select
      labelId="select-label"
      value={language }
      label="Language"
      onChange={handleChange}
    >
      <MenuItem value={'ua'}>ua</MenuItem>
      <MenuItem value={'ru'}>ru</MenuItem>
    </Select>
  </FormControl>
}
