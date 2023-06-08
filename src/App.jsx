import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ModalManager} from './components/popups/popup-factory';
import {Game} from './pages/Game';
import {Home} from './pages/Home';
import {fetchVerbs} from './store/verbs/verbs.think';
import style from './styles/main.module.scss';

const routes = createBrowserRouter([
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'game',
    element: <Game />,
  },
  {
    path: '*',
    element: <Home />
  }
])

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVerbs());
  }, [])

  return (
    <div className={style.app}>
      <RouterProvider router={routes} />
      <ModalManager />
    </div>
  );
}

export default App;
