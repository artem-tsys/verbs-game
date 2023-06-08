import {configureStore} from '@reduxjs/toolkit';
import {commonMiddleware} from './common/common.middleware';
import {commonSlice} from './common/common.slice';
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
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([commonMiddleware]),
  });

export const store = createConfigureStore();
