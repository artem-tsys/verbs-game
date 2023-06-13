import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ModalManager} from './components/popups/popup-factory';
import {RoutesPages} from './routes/RoutesPages';
import {fetchVerbs} from './store/verbs/verbs.think';
import style from './styles/main.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVerbs());
  }, [])

  return (
    <BrowserRouter>
      <div className={style.app}>
        <RoutesPages />
        <ModalManager />
      </div>
    </BrowserRouter>
  );
}

export default App;
