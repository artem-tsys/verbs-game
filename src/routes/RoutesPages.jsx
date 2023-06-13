import {Routes, Route} from 'react-router-dom';
import {Game} from '../pages/game/Game';
import {Home} from '../pages/home/Home';

const routesList = [
  {
    path: '/',
    component: Home
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'game',
    component: Game,
  }
];

const renderRoute = ({ path, component: Component, nested }) => (
  <Route key={path} path={path} element={<Component />}>
    {nested && nested.map(renderRoute)}
  </Route>
)

export const RoutesPages = () => <Routes>{routesList.map(renderRoute)}</Routes>
