import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {ModalManager} from './components/popups/popup-factory';
import {RoutesPages} from './routes/RoutesPages';
import {fetchVerbs} from './store/verbs/verbs.think';
import style from './styles/main.module.scss';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchVerbs());

    if(pathname === '/game') {
      navigate('/home')
    }
  }, [])

  return (
    <div className={style.app}>
      <RoutesPages />
      <ModalManager />
    </div>
  );
}

export default App;
