import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {IconButton} from '@mui/material';

export const Visible = ({ isVisible, changeVisible }) => {
  const onClick = () => {
    changeVisible(state => !state)
  };

  return <IconButton area-label='visible' onClick={onClick} >
    {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
  </IconButton>
}
