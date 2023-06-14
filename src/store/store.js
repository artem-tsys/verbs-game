import {configureStore} from '@reduxjs/toolkit';
import {commonSlice} from './common/common.slice';
import {roundMiddleware} from './game/game.middleware';
import {gameSlice} from './game/game.slice';
import {verbsSlice} from './verbs/verbs.slice';

export const createConfigureStore = (initState = {}) =>
  configureStore({
    reducer: {
      common: commonSlice.reducer,
      verbs: verbsSlice.reducer,
      game: gameSlice.reducer
    },
    preloadedState: initState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(roundMiddleware)
  });

export const store = createConfigureStore();
